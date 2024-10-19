import { RiEditBoxLine } from "react-icons/ri"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { formattedDate } from "../../../utils/dataFormatter"
import IconBtn from "../../common/IconBtn"

export default function MyProfile() {
    
    const { user } = useSelector((state) => state.profile)
    const navigate = useNavigate()

    
    return (
        <>
        <h1 className="mb-14 text-3xl font-medium text-richblack-5">
            My Profile
        </h1>
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:items-center md:justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12 ">
            <div className="flex flex-col items-center gap-4 md:flex-row md:items-center gap-x-4">
                <img
                    src={user?.image}
                    alt={`profile-${user?.firstName}`}
                    className="aspect-square w-[78px] rounded-full object-cover"
                />
                <div className=" flex flex-col items-center md:items-start space-y-1">
                    <p className="text-lg font-semibold text-richblack-5">
                        {user?.firstName + " " + user?.lastName}
                    </p>
                    <p className="text-sm text-richblack-300">{user?.email}</p>
                </div>
            </div>
            <div className=" m-auto md:mr-0">
                <IconBtn
                text="Edit"
                onclick={() => {
                    navigate("/dashboard/settings")
                }} 
                >
                    <RiEditBoxLine />
                </IconBtn>
            
            </div>
        </div>
        <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12 overflow-auto">
            <div className="flex flex-col items-center gap-4 md:gap-0 w-full md:flex-row md:items-center md:justify-between">
                <p className="text-lg font-semibold text-richblack-5">About</p>
                <IconBtn
                    text="Edit"
                    onclick={() => {
                    navigate("/dashboard/settings")
                    }}
                >
                    <RiEditBoxLine />
                </IconBtn>
            </div>
            <p
            className={`${
                user?.additionalDetails?.about
                ? "text-richblack-5"
                : "text-richblack-400"
            } text-sm font-medium text-center md:text-left`}
            >
            {user?.additionalDetails?.about ?? "Write Something About Yourself"}
            </p>
        </div>
        <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
            <div className="flex w-full flex-col items-center gap-4 md:gap-0 md:flex-row md:items-center md:justify-between ">
                <p className="text-lg font-semibold text-richblack-5">
                    Personal Details
                </p>
                <IconBtn
                    text="Edit"
                    onclick={() => {
                    navigate("/dashboard/settings")
                    }}
                >
                    <RiEditBoxLine />
                </IconBtn>
            </div>
            <div className="flex overflow-auto pb-4 max-w-[500px] gap-4 flex-col sm:flex-row sm:justify-between">

                <div className="flex flex-col gap-y-5">
                    <div>
                        <p className="mb-2 text-sm text-richblack-600">First Name</p>
                        <p className="text-sm font-medium text-richblack-5">
                            {user?.firstName}
                        </p>
                    </div>
                    <div>
                        <p className="mb-2 text-sm text-richblack-600">Email</p>
                        <p className="text-sm font-medium text-richblack-5">
                            {user?.email}
                        </p>
                    </div>
                    <div>
                        <p className="mb-2 text-sm text-richblack-600">Gender</p>
                        <p className="text-sm font-medium text-richblack-5">
                            {user?.additionalDetails?.gender ?? "Add Gender"}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-y-5">
                    <div>
                        <p className="mb-2 text-sm text-richblack-600">Last Name</p>
                        <p className="text-sm font-medium text-richblack-5">
                            {user?.lastName}
                        </p>
                    </div>
                    <div>
                        <p className="mb-2 text-sm text-richblack-600">Phone Number</p>
                        <p className="text-sm font-medium text-richblack-5">
                            {user?.additionalDetails?.phone ?? "Add Contact Number"}
                        </p>
                    </div>
                    <div>
                        <p className="mb-2 text-sm text-richblack-600">Date Of Birth</p>
                        <p className="text-sm font-medium text-richblack-5">
                            {formattedDate(user?.additionalDetails?.dob) ??
                            "Add Date Of Birth"}
                        </p>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}