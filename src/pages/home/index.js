import React from "react";
import HeroSection from "../../components/HeroSection";
import ClientsSection from "../../components/ClientsSection";
import FeaturesSection from "./../../components/FeaturesSection";
import TestimonialsSection from "./../../components/TestimonialsSection";
import NewsletterSection from "../../components/NewsletterSection";
import { useRouter } from "./../../util/router.js";
import ui from "../../images/ui.jpg";

function HomePage() {
  const router = useRouter();

  return (
    <>
      <HeroSection
        color="white"
        size="medium"
        title="Deliver Knowledge With Fun"
        subtitle="Aim to provide a easy-use product for learns from all kinds of fields with near-zero efforts to setup their own website."
        buttonText="Get Started"
        image={ui}
        buttonOnClick={() => {
          router.push("/pricing");
        }}
      />
      <ClientsSection
        color="background.alternate"
        size="normal"
        title=""
        subtitle=""
      />
      <FeaturesSection
        color="white"
        size="medium"
        title="Features"
        subtitle="I'd like to build the world's fastest e-learning system with the lowest cost and in the most simple way."
      />
      <TestimonialsSection
        color="background.alternate"
        size="medium"
        title="Here's what people are saying"
        subtitle=""
      />
      <NewsletterSection
        color="white"
        size="medium"
        title="Stay Connected!"
        subtitle="Feel free to send email to me, I'll reply to you even the tinyest questions!"
        buttonText="Subscribe"
        inputLabel="Enter your email"
        inputPlaceholder="user@example.com"
        subscribedMessage="You are now subscribed!"
      />
    </>
  );
}

export default HomePage;
