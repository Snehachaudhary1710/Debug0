function truncateText(title: string, maxLength: number) {
  if (title.length > maxLength) {
    return title.substring(0, maxLength - 3) + "...";
  }
  return title;
}

export default truncateText;
