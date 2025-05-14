"use client";

import React, { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatedSection } from "./animated-section";

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
  titleClassName = "text-3xl font-bold text-center mb-12",
  gridClassName = "grid gap-8",
  sectionVariant = "fadeIn",
  children,
}: CardSectionProps) {
  // Determine grid columns based on the columns prop
  const gridCols = {
    1: "",
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
  }[columns];

  const buttonStyles =
    "w-full h-12 px-8 bg-background/80 hover:bg-accent hover:border-primary transition-all mt-auto";

  return (
    <AnimatedSection variant={sectionVariant} className={className}>
      {title && <h2 className={titleClassName}>{title}</h2>}
      <div className={`${gridClassName} ${gridCols}`}>
        {items.map((item, index) => (
          <AnimatedSection
            key={index}
            variant={item.animationVariant || "fadeInUp"}
            delay={item.delay || index * 0.1}
          >
            <Card className={cardClassName}>
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className={contentClassName}>
                <p className="text-muted-foreground">{item.description}</p>
                {item.href && item.buttonText && (
                  <Button asChild variant="outline" className={buttonStyles}>
                    <Link href={item.href}>{item.buttonText}</Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
      {children}
    </AnimatedSection>
  );
}
