export function checkFileUnder5Mb(file: File): boolean {
  let valid = true;
  if (file) {
    const size = file.size / 1024 / 1024;
    // Check if the file is bigger than 5MB
    if (size > 5) {
      valid = false;
    }
  }
  return valid;
}

export function checkCVFormat(file: File): boolean {
  let valid = true;
  if (file) {
    const allowedFormats = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowedFormats.includes(file.type)) {
      valid = false;
    }
  }
  return valid;
}
