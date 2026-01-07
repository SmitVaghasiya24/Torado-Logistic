import { createRequestQuote } from "../../../models/requestQuote.model.js";
import AppError from "../../../utils/AppError.js";

export const createRequestQuoteService = async (data) => {
    const {
        name,
        email,
        phone_no,
        parcels_per_day,
        country_of_origin,
        delivery_country,
        customs_clearance,
        airport_collections,
        final_mile_required,
        avg_weight,
        avg_height,
        avg_width,
        created_by,
    } = data;

    if (
        !name ||
        !email ||
        !phone_no ||
        !parcels_per_day ||
        !country_of_origin ||
        !delivery_country ||
        !customs_clearance ||
        !airport_collections ||
        !final_mile_required ||
        !avg_weight ||
        !avg_height ||
        !avg_width
    ) {
        throw new AppError(
            "All required fields must be filled",
            400
        );
    }

    const result = await createRequestQuote({
        name,
        email,
        phone_no,
        parcels_per_day,
        country_of_origin,
        delivery_country,
        customs_clearance,
        airport_collections,
        final_mile_required,
        avg_weight,
        avg_height,
        avg_width,
        created_by: created_by || null,
    });

    if (!result) {
        throw new AppError(
            "Failed to submit quote request",
            500
        );
    }

    return true;
};
