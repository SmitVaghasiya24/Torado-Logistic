import { updateLocation } from "../../../models/location.model.js";
import AppError from "../../../utils/AppError.js";

export const updateLocationService = async (id, data, adminId) => {
    const {
        country,
        city,
        heading,
        description,
        phone,
        address_line,
        latitude,
        longitude,
        status,
    } = data;

    if (!id) {
        throw new AppError("Location ID is required", 400);
    }

    if (!country || country.trim() === "") {
        throw new AppError("Country is required", 400);
    }

    if (!city || city.trim() === "") {
        throw new AppError("City is required", 400);
    }

    if (!heading || heading.trim() === "") {
        throw new AppError("Heading is required", 400);
    }

    if (!phone || phone.trim() === "") {
        throw new AppError("Phone is required", 400);
    }

    if (!address_line || address_line.trim() === "") {
        throw new AppError("Address is required", 400);
    }

    const allowedStatus = ["active", "inactive"];
    if (!status || !allowedStatus.includes(status)) {
        throw new AppError("Invalid status value", 400);
    }

    const result = await updateLocation({
        id,
        country: country.trim(),
        city: city.trim(),
        heading: heading.trim(),
        description: description?.trim() || null,
        phone: phone.trim(),
        address_line: address_line.trim(),
        latitude,
        longitude,
        status,
        updated_by: adminId,
    });

    if (!result || result.affectedRows === 0) {
        throw new AppError("Location not found or no changes made", 404);
    }

    return {
        id,
        country,
        city,
        heading,
        phone,
        address_line,
        latitude,
        longitude,
        status,
    };
};
