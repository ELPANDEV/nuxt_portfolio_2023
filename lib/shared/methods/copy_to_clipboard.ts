export const copy_to_clipboard = (value: string) => {
  navigator.clipboard.writeText(value);

  alert("Copied the text: " + value);
}
