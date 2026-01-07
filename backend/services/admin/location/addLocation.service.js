import { addLocation } from "../../../models/location.model.js";
import AppError from "../../../utils/AppError.js";

export const addLocationService = async (data, adminId) => {
    const { country, city, heading, description, phone, address_line, latitude, longitude, status, } = data;

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
        throw new AppError("Phone number is required", 400);
    }

    if (!address_line || address_line.trim() === "") {
        throw new AppError("Address is required", 400);
    }

    const allowedStatus = ["active", "inactive"];
    if (status && !allowedStatus.includes(status)) {
        throw new AppError("Invalid status value", 400);
    }

    const result = await addLocation({
        country: country.trim(),
        city: city.trim(),
        heading: heading.trim(),
        description: description?.trim() || null,
        phone: phone.trim(),
        address_line: address_line.trim(),
        latitude,
        longitude,
        status,
        created_by: adminId,
    });

    if (!result?.id) {
        throw new AppError("Failed to add location", 500);
    }

    return {
        id: result.id,
        country,
        city,
        heading,
        phone,
        address_line,
        latitude,
        longitude,
        status: status || "active",
    };
};
