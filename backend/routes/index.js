import express from "express";

import requestQuoteRoutes from "./user/requestQuote.routes.js";
import contactInfoUserRoutes from "./user/contactInfo.routes.js";
import locationUserRoutes from "./user/location.routes.js";
import contactEnquiryUserRoutes from "./user/contactEnquiry.routes.js";
import faqUserRoutes from './user/faq.routes.js'
import pageUserRoutes from './user/page.routes.js'


import adminQuoteRoutes from "./admin/requestQuote.routes.js";
import adminAuthRoutes from "./admin/auth.routes.js";
import contactInfoRoutes from './admin/contactInfo.routes.js'
import locationRoutes from './admin/location.routes.js'
import contactEnquiryRoutes from './admin/contactEnquiry.routes.js'
import faqRoutes from './admin/faq.routes.js'
import pageRoutes from './admin/page.routes.js'

const router = express.Router();


router.use("/user", requestQuoteRoutes);
router.use("/user", contactInfoUserRoutes);
router.use("/user", locationUserRoutes);
router.use("/user", contactEnquiryUserRoutes);
router.use("/user", faqUserRoutes);
router.use("/user", pageUserRoutes);


router.use("/admin", adminQuoteRoutes);
router.use("/admin", adminAuthRoutes);
router.use("/admin", contactInfoRoutes);
router.use("/admin", locationRoutes);
router.use("/admin", contactEnquiryRoutes);
router.use("/admin", faqRoutes);
router.use("/admin", pageRoutes);


export default router;
