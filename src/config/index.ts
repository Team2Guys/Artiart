
export const formatPhoneNumber = (number: string): string | any => {
  if(!number) return 
  const cleaned = number?.replace(/\D/g, '');

  // Check if the cleaned number has the correct length (for example, 971501945268 should have 12 digits)
  if (cleaned.length === 12) {
    return `+${cleaned.slice(0, 3)} ${cleaned.slice(3, 5)} ${cleaned.slice(5, 8)} ${cleaned.slice(8, 12)}`;
  }

  return number; // Return the original number if it doesn't match the expected format
};
