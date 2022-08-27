/**
 * Text progress bar
 */
export class ProgressBar {
  /**
   * Text progress bar
   * @param {Number} value - The current value to fill the bar
   * @param {Number} maxValue - The max value of the bar
   * @param {Number} size - The bar size (in letters)
   */
  constructor(public value: number, public maxValue: number, public size: number) {
    this.value = value;
    this.maxValue = maxValue;
    this.size = size;
  }

  /**
   * @return {String} - The bar as a [string]
   */
  get(): string {
    const percentage = this.value / this.maxValue; // Calculate the percentage of the bar
    const progress = Math.round(this.size * percentage); // Calculate the number of square characters to fill the progress side.
    const emptyProgress = this.size - progress; // Calculate the number of dash characters to fill the empty progress side.

    const progressText = '🁢'.repeat(progress); // Repeat is creating a string with progress * characters in it
    const emptyProgressText = '🁣'.repeat(emptyProgress); // Repeat is creating a string with empty progress * characters in it
    const percentageNumber = Math.round(percentage * 100);

    const percentageText = `${percentageNumber}% ${percentageNumber == 100 ? '🎉' : ''}`; // Displaying the percentage of the bar

    const bar = '[' + progressText + emptyProgressText + ']' + percentageText + ''; // Creating the bar
    return bar;
  }
}
