import { Controller } from "@hotwired/stimulus";

// Strikethrough Controller
export default class StrikethroughController extends Controller {
  static targets = ["input", "result", "copyBtn"];
  static values = { selectedStyle: String };

  connect() {
    this.selectedStyleValue = "coret";
  }

  // Style conversion functions
  get styleConverters() {
    return {
      // Line-through using Unicode
      coret: function (text) {
        let result = "";
        for (let i = 0; i < text.length; i++) {
          const char = text[i];
          if (char === " " || char === "\n") {
            result += char;
          } else {
            result += char + "\u0336"; // Add strikethrough character
          }
        }
        return result;
      },

      // Using slash symbol
      "symbol-slash": function (text) {
        let result = "";
        for (let i = 0; i < text.length; i++) {
          const char = text[i];
          if (char === " " || char === "\n") {
            result += char;
          } else {
            result += char + "\u0338"; // Combining long solidus overlay
          }
        }
        return result;
      },

      // Underline using Unicode
      "garis-bawah": function (text) {
        let result = "";
        for (let i = 0; i < text.length; i++) {
          const char = text[i];
          if (char === " " || char === "\n") {
            result += char;
          } else {
            result += char + "\u0332"; // Combining low line
          }
        }
        return result;
      },

      // Dashed underline using Unicode
      "garis-putus": function (text) {
        let result = "";
        for (let i = 0; i < text.length; i++) {
          const char = text[i];
          if (char === " " || char === "\n") {
            result += char;
          } else {
            result += char + "\u0333"; // Combining double low line (closest to dashed)
          }
        }
        return result;
      },

      // Double underline using Unicode
      "garis-ganda": function (text) {
        let result = "";
        for (let i = 0; i < text.length; i++) {
          const char = text[i];
          if (char === " " || char === "\n") {
            result += char;
          } else {
            result += char + "\u0347"; // Combining double low line below
          }
        }
        return result;
      },

      // Wavy underline using Unicode
      "garis-gelombang": function (text) {
        let result = "";
        for (let i = 0; i < text.length; i++) {
          const char = text[i];
          if (char === " " || char === "\n") {
            result += char;
          } else {
            result += char + "\u0330"; // Combining tilde below
          }
        }
        return result;
      },
    };
  }

  selectStyle(event) {
    this.selectedStyleValue = event.target.value;
  }

  convert() {
    const originalText = this.inputTarget.value.trim();

    if (originalText === "") {
      this.resultTarget.textContent = "Please enter some text first.";
      this.resultTarget.className =
        "p-4 min-h-24 text-lg bg-gray-100 dark:bg-gray-800 rounded border text-red-500";
      return;
    }

    // Convert text using the selected style
    const convertedText =
      this.styleConverters[this.selectedStyleValue](originalText);
    this.resultTarget.textContent = convertedText;

    // Add success styling with animation
    this.resultTarget.className =
      "p-4 min-h-24 text-lg bg-gray-100 dark:bg-gray-800 rounded border text-green-600 transition-colors duration-500";

    // Remove success color after animation
    setTimeout(() => {
      this.resultTarget.className =
        "p-4 min-h-24 text-lg bg-gray-100 dark:bg-gray-800 rounded border text-gray-900 dark:text-gray-100";
    }, 500);
  }

  copy() {
    const textToCopy = this.resultTarget.textContent;

    if (
      textToCopy.trim() === "" ||
      textToCopy === "Please enter some text first."
    ) {
      alert("Nothing to copy!");
      return;
    }

    // Use the clipboard API to copy text
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        // Temporary feedback
        const originalText = this.copyBtnTarget.textContent;
        this.copyBtnTarget.textContent = "Copied!";
        this.copyBtnTarget.className =
          "absolute top-2 right-2 px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700 transition-colors";

        setTimeout(() => {
          this.copyBtnTarget.textContent = originalText;
          this.copyBtnTarget.className =
            "absolute top-2 right-2 px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors";
        }, 2000);
      })
      .catch(() => {
        alert("Failed to copy text. Please try again.");
      });
  }
}
