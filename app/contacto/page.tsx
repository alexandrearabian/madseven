"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { PageTransition } from "@/components/page-transition";
import { AnimatedSection } from "@/components/animated-section";
import { motion } from "motion/react";
import { GradientText } from "@/components/gradient-text";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormStatus {
  loading: boolean;
  success: boolean;
  error: string | null;
}

interface RateLimitInfo {
  limit: number;
  remaining: number;
  reset: number;
  requestsInWindow: number;
}

export default function Contacto() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    loading: false,
    success: false,
    error: null,
  });

  const [rateLimitInfo, setRateLimitInfo] = useState<RateLimitInfo | null>(
    null,
  );
  const [rateLimitFetched, setRateLimitFetched] = useState<boolean>(false);

  // Check rate limit status on page load
  useEffect(() => {
    const checkRateLimit = async () => {
      try {
        const response = await fetch("/api/contact/check-limit");
        if (response.ok) {
          const data = await response.json();
          setRateLimitInfo(data.rateLimit);
        }
      } catch (error) {
        console.error("Error fetching rate limit info:", error);
      } finally {
        setRateLimitFetched(true);
      }
    };

    checkRateLimit();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        loading: false,
        success: false,
        error: "Por favor completa todos los campos requeridos.",
      });
      return;
    }

    setFormStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al enviar el mensaje");
      }

      // Update rate limit info after successful submission
      try {
        const rateLimitResponse = await fetch("/api/contact/check-limit");
        if (rateLimitResponse.ok) {
          const rateLimitData = await rateLimitResponse.json();
          setRateLimitInfo(rateLimitData.rateLimit);
        }
      } catch (error) {
        console.error(
          "Error fetching rate limit info after submission:",
          error,
        );
      }

      // Reset form and show success message
      setFormData({ name: "", email: "", company: "", message: "" });
      setFormStatus({
        loading: false,
        success: true,
        error: null,
      });
    } catch (error) {
      setFormStatus({
        loading: false,
        success: false,
        error:
          error instanceof Error ? error.message : "Error al enviar el mensaje",
      });

      // Try to update rate limit info even on error
      try {
        const rateLimitResponse = await fetch("/api/contact/check-limit");
        if (rateLimitResponse.ok) {
          const rateLimitData = await rateLimitResponse.json();
          setRateLimitInfo(rateLimitData.rateLimit);
        }
      } catch (error) {
        console.error("Error fetching rate limit info after error:", error);
      }
    }
  };

  return (
    <PageTransition>
      <div className="flex flex-col gap-24">
        {/* Hero Section */}
        <AnimatedSection
          variant="fadeIn"
          className="relative flex flex-col items-center justify-center gap-8 pt-32 text-center px-2"
        >
          <motion.h1
            className="text-6xl font-bold tracking-tight md:text-8xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GradientText variant="primary">Contacta</GradientText>
            <GradientText variant="secondary">nos</GradientText>
          </motion.h1>
          <motion.p
            className="max-w-[800px] text-md md:text-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Estamos acá para ayudarte a alcanzar tus objetivos. Contanos sobre
            tu proyecto y te responderemos a la brevedad.
          </motion.p>
        </AnimatedSection>

        {/* Contact Form Section */}
        <section className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Information */}
            <AnimatedSection variant="fadeInLeft" delay={0.2}>
              <Card className="shadow-lg bg-background/80 border border-primary/40">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold">
                    Información de Contacto
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Estamos disponibles para responder tus consultas y coordinar
                    una reunión.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h3 className="text-xl font-semibold">Email</h3>
                    <Link
                      href="mailto:info@madseven.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@madseven.com
                    </Link>
                  </motion.div>
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold">Teléfono</h3>
                    <Link
                      href={`tel:+34912345678`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +34 722 68 35 98
                    </Link>
                  </motion.div>
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <h3 className="text-xl font-semibold">Ubicación</h3>
                    <p className="text-muted-foreground">
                      Av. De los Madroños 13, 5H - 28043 Madrid, España
                    </p>
                  </motion.div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection variant="fadeInRight" delay={0.3}>
              <Card className="shadow-lg bg-background/80 border border-primary/40">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold">
                    Envianos un Mensaje
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Completá el formulario y nos pondremos en contacto contigo.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {formStatus.success ? (
                    <motion.div
                      className="p-6 text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-2xl font-semibold text-green-500 mb-4">
                        ¡Mensaje Enviado!
                      </h3>
                      <p className="text-lg mb-6">
                        Gracias por contactarnos. Te responderemos a la
                        brevedad.
                      </p>
                      <Button
                        onClick={() =>
                          setFormStatus({
                            loading: false,
                            success: false,
                            error: null,
                          })
                        }
                        className="w-full h-12 text-lg"
                      >
                        Enviar otro mensaje
                      </Button>
                    </motion.div>
                  ) : (
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      {formStatus.error && (
                        <motion.div
                          className="p-4 bg-red-100 border border-red-300 rounded text-red-800"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                        >
                          {formStatus.error}
                        </motion.div>
                      )}
                      <div className="space-y-2">
                        <Label htmlFor="name">Nombre</Label>
                        <Input
                          id="name"
                          placeholder="Tu nombre completo"
                          className="h-12 px-8 bg-background/80 hover:border-primary transition-all"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="tu@email.com"
                          className="h-12 px-8 bg-background/80 hover:border-primary transition-all"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Empresa</Label>
                        <Input
                          id="company"
                          placeholder="Nombre de tu empresa"
                          className="h-12 px-8 bg-background/80 hover:border-primary transition-all"
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Mensaje</Label>
                        <Textarea
                          id="message"
                          placeholder="Contanos sobre tu proyecto"
                          className="min-h-[150px] bg-background/80 hover:border-primary transition-all"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      {rateLimitFetched &&
                        rateLimitInfo &&
                        rateLimitInfo.remaining < rateLimitInfo.limit && (
                          <div className="text-sm text-amber-500">
                            Tienes {rateLimitInfo.remaining}{" "}
                            {rateLimitInfo.remaining === 1
                              ? "mensaje"
                              : "mensajes"}{" "}
                            disponible{rateLimitInfo.remaining !== 1 ? "s" : ""}{" "}
                            para enviar.
                          </div>
                        )}
                      <div>
                        <Button
                          type="submit"
                          className="w-full h-12 text-lg hover:bg-accent transition-all cursor-pointer"
                          disabled={
                            formStatus.loading ||
                            (!!rateLimitInfo && rateLimitInfo.remaining <= 0)
                          }
                        >
                          {formStatus.loading
                            ? "Enviando..."
                            : !!rateLimitInfo && rateLimitInfo.remaining <= 0
                              ? "Límite alcanzado"
                              : "Enviar Mensaje"}
                        </Button>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
