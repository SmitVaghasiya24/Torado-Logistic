import { deletePage } from "../../../models/page.model.js";
import AppError from "../../../utils/AppError.js";

export const deletePageService = async (id) => {
    if (!id) {
        throw new AppError("Page ID is required", 400);
    }

    const result = await deletePage(id);

    if (!result || result.affectedRows === 0) {
        throw new AppError(
            "Page not found",
            404
        );
    }

    return {
        id,
        deleted: true,
    };
};
