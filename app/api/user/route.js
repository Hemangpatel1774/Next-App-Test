import User from "@/app/libs/models/userModel";
import dbCon from "@/app/libs/MongoDbCon";
import { NextResponse } from "next/server";


export async function GET(request) {
    await dbCon();
    const userData = await User.find({});
    return NextResponse.json(userData);
}
export async function POST(request) {
    try {
        await dbCon();
        // const {name} =await request.body; // This will not work
        const { name, age } = await request.json(); // This will work
        const newUser = new User({ name, age:+age });
        await newUser.save();
        return NextResponse.json({ Val: `Hello ${name}..!` });
    }
    catch (error) {
        return NextResponse.json({ Val: error });
    }
}
export async function DELETE(request) {
    try {
        await dbCon();
        const { id } = await request.json();
        console.log(id);
        
        await User.findByIdAndDelete(id);
        return NextResponse.json({ Val: "User Deleted Successfully" });
    }
    catch (error) {
        return NextResponse.json({ Val: error });
    }
}
export async function PUT(request) {
    try {
        await dbCon();
        const { id, name, age } = await request.json();
        await User.findByIdAndUpdate
        (id, { name, age });
        return NextResponse.json({ Val: "User Updated Successfully" });
    }
    catch (error) {
        return NextResponse.json({ Val: error });
    }   
}