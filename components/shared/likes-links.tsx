import React from "react";
import {Heart, Link} from "lucide-react";

interface Props{
    className?: string;
}

export const LikesLinks:React.FC<Props> = ({className}) => {
    return (
        <div className="flex flex-row gap-6">
            <Heart width={35} height={35} color="#B7B7B7"/>
            <Link width={35} height={35} color="#B7B7B7" />
        </div>
    )
}