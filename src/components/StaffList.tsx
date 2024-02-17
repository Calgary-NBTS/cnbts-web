import { getStaff } from "../sanity/sanity-utils";
import StaffListing from "./StaffListing";

const StaffList = async() => {
    const staff = await getStaff();
    return (
        <div className="grid">
            {staff.map((member) => (
                <StaffListing key={member._id} name={member.name} image={member.image} bio={member.bio} />
            ))}
        </div>
    )
}

export default StaffList;