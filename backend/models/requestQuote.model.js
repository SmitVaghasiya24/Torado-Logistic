import db from "../config/db.js";

export const createRequestQuote = async (data) => {
    const [result] = await db.execute(
        `CALL sp_create_request_quote(?,?,?,?,?,?,?,?,?,?,?,?,?)`,
        [
            data.name,
            data.email,
            data.phone_no,
            data.parcels_per_day,
            data.country_of_origin,
            data.delivery_country,
            data.customs_clearance,
            data.airport_collections,
            data.final_mile_required,
            data.avg_weight,
            data.avg_height,
            data.avg_width,
            data.created_by || null
        ]
    );

    return result;
};

export const getAllRequestQuotes = async () => {
    const [rows] = await db.execute(
        `CALL sp_get_request_quotes()`
    );
    return rows[0];
};

export const updateRequestQuoteStatus = async (id, status, updatedBy) => {
    const [result] = await db.execute(
        `CALL sp_update_request_quote_status(?,?,?)`,
        [id, status, updatedBy]
    );
    return result;
};
