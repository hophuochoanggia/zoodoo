import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  gql,
} from "@apollo/client";
import dayjs from "dayjs";

interface Booking {
  id: number;
  name: string;
  email: string;
  phone: string;
  adults: number;
  kids: number;
  start_time: string;
  end_time: string;
}

const BOOKING_QUERY = gql`
  query BookingItem($filter: Booking_filter) {
    Booking(filter: $filter) {
      id
      name
      email
      phone
      adults
      kids
      start_time
      end_time
      __typename
    }
  }
`;

const CREATE_BOOKING_MUTATION = gql`
  mutation CreateBookingItem($data: create_Booking_input!) {
    create_Booking_item(data: $data) {
      id
      name
      email
      phone
      adults
      kids
      start_time
      end_time
      __typename
    }
  }
`;

export const getClient = () => {
  const httpLink = new HttpLink({
    uri: "https://erp.zoodoodalat.com/graphql",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_DIRECTUS_ERP_TOKEN}`,
    },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([httpLink]),
    cache: new InMemoryCache(),
  });

  return client;
};

const client = getClient();

export const getAvailableSlot = (date: Date) => {
  const start_of_day = dayjs(date)
    .set("hour", 0)
    .set("minute", 0)
    .set("second", 0);

  const end_of_day = dayjs(start_of_day).add(1, "day");
  return client.query<Booking[]>({
    query: BOOKING_QUERY,
    variables: {
      filter: {
        start_time: {
          _gte: start_of_day,
          _lt: end_of_day,
        },
      },
    },
  });
};

export const createBooking = (data: any) => {
  return client.mutate<Booking[]>({
    mutation: CREATE_BOOKING_MUTATION,
    variables: {
      data,
    },
  });
};
