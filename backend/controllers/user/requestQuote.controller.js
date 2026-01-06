import { createRequestQuote } from "../../models/requestQuote.model.js";

export const createRequestQuoteController = async (req, res, next) => {
    try {
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
        } = req.body;

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
            return res.status(400).json({
                success: false,
                message: "All required fields must be filled",
            });
        }

        await createRequestQuote({
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
            created_by: null,
        });

        return res.status(201).json({
            success: true,
            message: "Quote request submitted successfully",
        });

    } catch (error) {
        next(error);
    }
};
