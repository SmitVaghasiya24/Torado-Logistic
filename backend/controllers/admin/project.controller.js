import { addProjectService, getProjectsAdminService, updateProjectService, deleteProjectService, updateProjectStatusService } from "../../services/admin/project/index.js";
import AppError from "../../utils/AppError.js";
import fs from "fs";
import path from "path";
import { getProjectById } from "../../models/project.model.js";

export const addProjectController = async (req, res, next) => {
    try {
        if (!req.file) {
            throw new AppError("Thumbnail is required", 400);
        }

        const thumbnailPath = req.file.path.replace(/\\/g, "/");

        const payload = {
            ...req.body,
            thumbnail: thumbnailPath,
        };

        const result = await addProjectService(payload, req.admin_id);

        res.status(201).json({
            success: true,
            message: "Project added successfully",
            data: {
                ...result,
                thumbnail: `${req.protocol}://${req.get("host")}/${thumbnailPath}`,
            },
        });
    } catch (error) {
        next(error);
    }
};



export const getProjectsAdminController = async (req, res, next) => {
    try {
        const projects = await getProjectsAdminService();

        const data = projects.map((item) => ({
            ...item,
            thumbnail: item.thumbnail
                ? `${req.protocol}://${req.get("host")}/${item.thumbnail}`
                : null,
        }));

        res.status(200).json({
            success: true,
            count: data.length,
            data,
        });
    } catch (error) {
        next(error);
    }
};


export const updateProjectController = async (req, res, next) => {
    try {
        const { id } = req.params;

        const existingProject = await getProjectById(id);
        if (!existingProject) {
            throw new AppError("Project not found", 404);
        }

        let thumbnailPath = existingProject.thumbnail;

        if (req.file) {
            const newPath = req.file.path.replace(/\\/g, "/");

            if (existingProject.thumbnail) {
                const oldImagePath = path.join(
                    process.cwd(),
                    existingProject.thumbnail
                );

                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath);
                }
            }

            thumbnailPath = newPath;
        }

        const payload = {
            ...req.body,
            thumbnail: thumbnailPath,
        };

        const result = await updateProjectService(
            Number(id),
            payload,
            req.admin_id
        );

        res.status(200).json({
            success: true,
            message: "Project updated successfully",
            data: {
                ...result,
                thumbnail: `${req.protocol}://${req.get("host")}/${thumbnailPath}`,
            },
        });
    } catch (error) {
        next(error);
    }
};




export const deleteProjectController = async (req, res, next) => {
    try {
        const { id } = req.params;

        const project = await getProjectById(id);
        if (!project) {
            throw new AppError("Project not found", 404);
        }

        await deleteProjectService(Number(id));

        if (project.thumbnail) {
            const imagePath = path.join(
                process.cwd(),
                project.thumbnail
            );

            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }

        res.status(200).json({
            success: true,
            message: "Project deleted successfully",
            data: {
                id,
                deleted: true,
            },
        });
    } catch (error) {
        next(error);
    }
};






export const updateProjectStatusController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const result = await updateProjectStatusService(
            Number(id),
            status,
            req.admin_id
        );

        res.status(200).json({
            success: true,
            message: "Project status updated successfully",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};
