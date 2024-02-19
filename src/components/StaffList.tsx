import { getStaff } from "@/sanity/sanity-utils";
import StaffListing from "./StaffListing";

const StaffList = async() => {
    const staff = await getStaff();
    return (
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
            {staff.map((member) => (
                <StaffListing
                    key={member._id} 
                    name={member.name} 
                    image={member.image} 
                    bio={member.bio} 
                    pronouns={member.pronouns}
                />
            ))}
        </div>
    )
}

export default StaffList;