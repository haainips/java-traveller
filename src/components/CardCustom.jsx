import { Card, CardContent } from "@/components/ui/card";
import CategoryIcon from "../assets/kategori-shape.png"
import { Star } from "lucide-react";

export default function CardCustom({
    image,
    title,
    description,
    category,
    icon,
    price,
    buttonLabel,
    onClick,
    children,
    classNames = {},
    showOverlay = false,
    titleOverlay,
    buttonOverlayLabel,
    overlayContent,
}) {
    return (
        <div className={`font-primary ${classNames.container}`}>
            <Card className={`rounded-xl shadow  ${classNames.card || ''}`}>
                <CardContent className="">
                    {image && (
                        <div className="relative">
                            <img
                                src={image}
                                alt={title || "Image"}
                                className={`object-cover rounded-t-xl ${classNames.image || ''}`}
                            />

                            {showOverlay && (
                                <div className="absolute inset-0 font-primary bg-black/20 rounded-xl text-white flex flex-col justify-end items-start py-14 p-4 rounded-t-xl z-10">
                                    {overlayContent ? (
                                        overlayContent
                                    ) : (
                                        <>
                                            {titleOverlay &&
                                                <h2 className={` ${classNames.tittleOverlay || ''}`}>{titleOverlay}</h2>}
                                            {buttonOverlayLabel && (
                                                <button
                                                    onClick={onClick}
                                                    className={`mt-2 rounded-lg ${classNames.buttonOverlay || ''}`}
                                                >
                                                    {buttonOverlayLabel}
                                                </button>
                                            )}
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    )}

                    <div className={`flex-col justify-between items-end gap-2 ${classNames.text || ''}`}>
                        {category && (
                            <div className="flex items-center drop-shadow-xl ">
                                {/* Background Shape (Image) */}
                                <img
                                    src={CategoryIcon}
                                    alt=""
                                    className="absolute w-40 h-6 -z-10"
                                />

                                {/* Text Kategori */}
                                <p className={`${classNames.category} px-4 py-1`}>
                                    {category}
                                </p>
                            </div>
                        )}
                        <div className={`${classNames.subtitle || ''}`}>
                            {icon && (
                                <span>
                                    {icon}
                                </span>
                            )}
                            {title && (
                                <h1 className={` ${classNames.title || ''}`}>
                                    {title}
                                </h1>
                            )}
                            {price &&
                                <p className={`${classNames.price || ''}`}>
                                    {price}
                                </p>}
                        </div>
                        {description && (
                            <p className={`${classNames.description || ''}`}>
                                {description}
                            </p>
                        )}
                        <div className={`bottom-0 ${classNames.footer || ''}`}>
                            <div className={`flex ${classNames.review || ''}`}>
                                <Star fill="#FFC107" stroke="white" />
                                <Star fill="#FFC107" stroke="white" />
                                <Star fill="#FFC107" stroke="white" />
                                <Star fill="#FFC107" stroke="white" />
                                <Star fill="#FFC107" stroke="white" />
                            </div>
                            {buttonLabel && (
                                <button
                                    onClick={onClick}
                                    className={` bg-utama text-black rounded-lg ${classNames.buttonLabel || ''}`}
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
