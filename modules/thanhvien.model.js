import mongoose from "mongoose";

const thanhvienSchema = mongoose.Schema(
    {
        HoTen: {
            type: String,
            trim: true,
            required: true,
        },
        GioiTinh: {
            type: Boolean,
            trim: true,
            required: true,
        },
        NgaySinh: {
            type: Date,
            max: new Date(),
            required: true,
        },
        DiaChiEmail: {
            type: String,
            required: true,
            unique: true
        },
        SoDienThoai: {
            type: String,
            required: true,
            unique: true
        },
        isTruongDoan: {
            type: Boolean,
            required: true,
            default: false,
        },
    }
);

const ThanhVien = mongoose.model("ThanhVien", thanhvienSchema);

export default ThanhVien;