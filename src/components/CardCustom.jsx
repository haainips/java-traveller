import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function CardCustom({
    image,
    title,
    description,
    price,
    buttonLabel,
    onClick,
    children,
    classNames = {},
}) {
    return (
        <div className={`font-primary ${classNames.container}`}>
            <Card className={`rounded-xl shadow  ${classNames.card || ''}`}>
                <CardContent className="">
                    {image && (
                        <img
                            src={image}
                            alt={title || "Image"}
                            className={`w-full h-40 object-cover rounded-t-xl ${classNames.image || ''}`}
                        />
                    )}
                    <div className="flex-col p-4 space-y-2">
                        <div className={`${classNames.header || ''}`}>
                            {title && (
                                <h1 className={` ${classNames.title || ''}`}>
                                    {title}
                                </h1>
                            )}
                            {price &&
                                <p className={`text-sm font-medium${classNames.price || ''}`}>
                                    {price}
                                </p>}
                        </div>
                        {description &&
                            <p className={`text-sm text-gray-600 h-24 ${classNames.description || ''}`}>
                                {description}
                            </p>}
                        <div className={`${classNames.footer || ''}`}>
                            <div className={`flex ${classNames.review || ''}`}>
                                <Star fill="#FFC107" stroke="white"/>
                                <Star fill="#FFC107" stroke="white"/>
                                <Star fill="#FFC107" stroke="white"/>
                                <Star fill="#FFC107" stroke="white"/>
                                <Star fill="#FFC107" stroke="white"/>
                            </div>
                            {buttonLabel && (
                                <button
                                    onClick={onClick}
                                    className="mt-2 px-4 py-2 bg-utama text-black rounded-lg"
                                >
                                    {buttonLabel}
                                </button>
                            )}
                        </div>
                        {children && children}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
