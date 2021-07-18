import mongoose from "mongoose";
import { BookSchema } from "../schemas/BookSchema";
import { BookInterface } from "src/interfaces/BookInterface";

const BookModel = mongoose.model<BookInterface>("Book", BookSchema);

export { BookModel };
