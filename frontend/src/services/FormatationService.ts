export const FormatationService = {
  monetaryValue(value: number): string {
    return value.toLocaleString('pt-Br', { minimumFractionDigits: 2, style: 'currency', currency: "BRL" });
  },
  TextLimiter(text: string, maxLength: number): string {
    if (text.length < maxLength) {
      return text;
    }

    return text.slice(0, 50) + '...';
  }
};