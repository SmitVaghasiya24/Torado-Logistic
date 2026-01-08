import express from "express";

import requestQuoteRoutes from "./user/requestQuote.routes.js";
import contactInfoUserRoutes from "./user/contactInfo.routes.js";
import locationUserRoutes from "./user/location.routes.js";
import contactEnquiryUserRoutes from "./user/contactEnquiry.routes.js";
import faqUserRoutes from './user/faq.routes.js';
import pageUserRoutes from './user/page.routes.js';
import projectUserRoutes from './user/project.routes.js'
import blogUserCategory from './user/blogCategory.routes.js'
import blogTagUserRoutes from './user/blogTag.routes.js'
import serviceUserRoutes from './user/service.routes.js'


import adminQuoteRoutes from "./admin/requestQuote.routes.js";
import adminAuthRoutes from "./admin/auth.routes.js";
import contactInfoRoutes from './admin/contactInfo.routes.js';
import locationRoutes from './admin/location.routes.js';
import contactEnquiryRoutes from './admin/contactEnquiry.routes.js';
import faqRoutes from './admin/faq.routes.js';
import pageRoutes from './admin/page.routes.js';
import projetRoutes from './admin/project.routes.js';
import blogCategoryRoutes from './admin/blogCategory.routes.js';
import blogTagRoutes from './admin/blogTag.routes.js';
import serviceRoutes from './admin/service.routes.js';

const router = express.Router();


router.use("/user", requestQuoteRoutes);
router.use("/user", contactInfoUserRoutes);
router.use("/user", locationUserRoutes);
router.use("/user", contactEnquiryUserRoutes);
router.use("/user", faqUserRoutes);
router.use("/user", pageUserRoutes);
router.use("/user", projectUserRoutes);
router.use("/user", blogUserCategory);
router.use("/user", blogTagUserRoutes);
router.use("/user", serviceUserRoutes);


router.use("/admin", adminQuoteRoutes);
router.use("/admin", adminAuthRoutes);
router.use("/admin", contactInfoRoutes);
router.use("/admin", locationRoutes);
router.use("/admin", contactEnquiryRoutes);
router.use("/admin", faqRoutes);
router.use("/admin", pageRoutes);
router.use("/admin", projetRoutes);
router.use("/admin", blogCategoryRoutes);
router.use("/admin", blogTagRoutes);
router.use("/admin", serviceRoutes);


export default router;
