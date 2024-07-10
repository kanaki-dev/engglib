import { fileURLToPath } from "url";
import { dirname } from "path";

// Get the file path of the current module
export const __filename = fileURLToPath(import.meta.url);

// Get the directory name of the current module
export const __dirname = dirname(__filename);