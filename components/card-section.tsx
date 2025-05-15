"use client";

import React, { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "./animated-section";
import { motion } from "motion/react";

// Define animation variant type
type AnimationVariant =
  | "fadeIn"
  | "fadeInUp"
  | "fadeInLeft"
  | "fadeInRight"
  | "zoomIn"
  | "scaleUp"
  | "staggered";

// Interface for card items
export interface CardItem {
  title: string;
  description: string;
  href?: string;
  buttonText?: string;
  animationVariant?: AnimationVariant;
  delay?: number;
  imageSrc?: string;
  imageAlt?: string;
}

interface CardSectionProps {
  title?: string;
  items: CardItem[];
  columns?: 1 | 2 | 3;
  className?: string;
  cardClassName?: string;
  contentClassName?: string;
  titleClassName?: string;
  gridClassName?: string;
  sectionVariant?: AnimationVariant;
  children?: ReactNode;
}

export function CardSection({
  title,
  items,
  columns = 3,
  className = "container mx-auto px-4",
  cardClassName = "shadow-lg bg-background/80 border border-primary/40 h-full flex flex-col",
  contentClassName = "space-y-4 flex-grow",
  titleClassName = "text-4xl md:text-5xl font-bold text-center mb-12",
  gridClassName = "grid gap-8",
  sectionVariant = "fadeIn",
  children,
}: CardSectionProps) {
  // Determine grid columns based on the columns prop
  const gridCols = {
    1: "",
    2: "sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2",
    3: "sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  }[columns];

  const buttonStyles =
    "w-full h-12 px-8 bg-background/80 hover:bg-accent hover:border-primary transition-all mt-auto";

  return (
    <AnimatedSection variant={sectionVariant} className={className}>
      {title && <h1 className={titleClassName}>{title}</h1>}
      <div className={`${gridClassName} ${gridCols}`}>
        {items.map((item, index) => (
          <AnimatedSection
            key={index}
            variant={item.animationVariant || "fadeInUp"}
            delay={item.delay || index * 0.1}
          >
            <Card className={cardClassName}>
              {item.imageSrc && (
                <div className="overflow-hidden rounded-t-lg w-full relative group">
                  {item.href ? (
                    <Link href={item.href} className="block">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="relative cursor-pointer"
                      >
                        <Image
                          src={item.imageSrc}
                          alt={item.imageAlt || item.title}
                          width={500}
                          height={400}
                          className="object-cover w-full h-[350px] transition-all duration-300 group-hover:blur-sm"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                          <p className="text-white text-center">{item.title}</p>
                        </div>
                      </motion.div>
                    </Link>
                  ) : (
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt || item.title}
                        width={500}
                        height={400}
                        className="object-cover w-full h-[350px] transition-all duration-300 group-hover:blur-sm"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                        <p className="text-white text-center">{item.title}</p>
                      </div>
                    </motion.div>
                  )}
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className={contentClassName}>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </CardContent>
              <CardFooter>
                {item.href && item.buttonText && (
                  <Button asChild variant="outline" className={buttonStyles}>
                    <Link href={item.href}>{item.buttonText}</Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          </AnimatedSection>
        ))}
      </div>
      {children}
    </AnimatedSection>
  );
}
