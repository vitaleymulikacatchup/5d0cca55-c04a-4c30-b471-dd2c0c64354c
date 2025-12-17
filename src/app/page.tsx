"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplitStacked from '@/components/sections/hero/HeroSplitStacked';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSplit from '@/components/sections/footer/FooterSplit';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import { Phone, Mail, MapPin, Instagram, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="largeSizeExtraLargeSpacing"
      background="noiseDiagonalGradient"
      cardStyle="elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="layered"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Smm Dont Sleep"
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Reserve", id: "contact" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "footer" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitStacked
          title="Experience Unforgettable Dining"
          description="Welcome to Smm Dont Sleep, where culinary excellence meets warm hospitality. Discover exceptional cuisine, impeccable service, and an atmosphere that keeps you coming back."
          tag="Fine Dining Experience"
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765962042904-sfbm6x13.jpg",
              imageAlt: "Restaurant ambiance"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765962044328-vp6t507y.jpg",
              imageAlt: "Gourmet plated dish"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765962045594-grr9efqd.jpg",
              imageAlt: "Delicious appetizer"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765962047033-9lp5vrk5.jpg",
              imageAlt: "Fine dining presentation"
            }
          ]}
          buttons={[
            { text: "Make a Reservation", href: "contact" },
            { text: "View Menu", href: "menu" }
          ]}
          stackedVariant="card"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="Crafting culinary memories since day one. At Smm Dont Sleep, we believe great food brings people together. Our commitment to quality ingredients, innovative recipes, and exceptional service defines every dining experience."
          useInvertedBackground="noInvert"
          buttons={[
            { text: "Our Story", href: "#" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSix
          title="Why Choose Smm Dont Sleep"
          description="Discover what makes our restaurant special and worth your visit"
          tag="Our Offerings"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          features={[
            {
              id: 1,
              title: "Exquisite Ambiance",
              description: "Elegant dining environment with carefully curated lighting and decor that creates the perfect setting for any occasion",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765962048522-fq4gzq4s.jpg",
              imageAlt: "Restaurant ambiance"
            },
            {
              id: 2,
              title: "Impeccable Service",
              description: "Our highly trained staff ensures every guest receives personalized attention and genuine hospitality throughout their meal",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765962050365-fh67otff.jpg",
              imageAlt: "Professional service"
            },
            {
              id: 3,
              title: "Chef-Driven Cuisine",
              description: "Creative dishes prepared by experienced chefs using premium ingredients and time-honored culinary techniques",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765962051814-h9y47qa0.jpg",
              imageAlt: "Professional kitchen"
            }
          ]}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardThree
          title="Featured Dishes"
          description="Explore our signature menu items crafted with passion and precision"
          tag="Menu Highlights"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          products={[
            {
              id: "1",
              name: "Premium Grilled Steak",
              price: "$42",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765962053463-fbmomkxd.jpg",
              imageAlt: "Grilled steak",
              initialQuantity: 1
            },
            {
              id: "2",
              name: "Fresh Seafood Platter",
              price: "$48",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765962054979-yb283rez.jpg",
              imageAlt: "Seafood platter",
              initialQuantity: 1
            },
            {
              id: "3",
              name: "Handmade Pasta",
              price: "$32",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765962056717-kkcr7gnb.jpg",
              imageAlt: "Pasta dish",
              initialQuantity: 1
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="What Our Guests Say"
          description="Hear from our satisfied diners about their experiences"
          tag="Guest Reviews"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              name: "James Anderson, Food Critic",
              date: "Date: 15 January 2025",
              title: "An absolute culinary masterpiece",
              quote: "Smm Dont Sleep delivers exceptional food quality combined with outstanding service. Every detail, from the presentation to the flavors, showcases true culinary expertise. This is fine dining at its finest.",
              tag: "5-Star Review",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765962057818-a9emej5v.jpg",
              avatarAlt: "James Anderson"
            },
            {
              id: "2",
              name: "Sarah Mitchell, Restaurant Blogger",
              date: "Date: 10 January 2025",
              title: "Worth every visit, every time",
              quote: "The ambiance is perfect, the food is incredible, and the service staff genuinely cares about your experience. I've visited five times and would visit five hundred more. Highly recommended for special occasions.",
              tag: "5-Star Review",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765962058998-1ymx7wy3.jpg",
              avatarAlt: "Sarah Mitchell"
            },
            {
              id: "3",
              name: "Michael Chen, Local Regular",
              date: "Date: 5 January 2025",
              title: "My favorite place in the city",
              quote: "They remember my name, my preferences, and make me feel like family. The consistency in food quality and service excellence keeps me coming back week after week.",
              tag: "5-Star Review",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765962060189-ha2uk6mr.jpg",
              avatarAlt: "Michael Chen"
            },
            {
              id: "4",
              name: "Emily Rodriguez, Event Planner",
              date: "Date: 28 December 2024",
              title: "Perfect for celebrations",
              quote: "We hosted our company's holiday dinner here and everything was flawless. The team accommodated all our special requests, and our guests are still talking about it.",
              tag: "5-Star Review",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765962061422-l03xlpp1.jpg",
              avatarAlt: "Emily Rodriguez"
            },
            {
              id: "5",
              name: "David Thompson, Travel Enthusiast",
              date: "Date: 20 December 2024",
              title: "Worth the reservation",
              quote: "Fine dining doesn't always have to be stuffy. Here, it's elegant but warm, sophisticated but welcoming. The wine pairings were spot-on and the desserts were divine.",
              tag: "5-Star Review",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765962062893-ai2dk47m.jpg",
              avatarAlt: "David Thompson"
            },
            {
              id: "6",
              name: "Jessica Williams, Food Enthusiast",
              date: "Date: 15 December 2024",
              title: "An evening to remember",
              quote: "From the moment we walked in until we left, everything was perfect. The attention to detail is remarkable. This restaurant truly understands what fine dining means.",
              tag: "5-Star Review",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765962064005-yetjuq20.jpg",
              avatarAlt: "Jessica Williams"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardSix
          title="Meet Our Team"
          description="The passionate culinary experts and hospitality professionals behind Smm Dont Sleep"
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          members={[
            {
              id: "1",
              name: "Chef Marco Giovanni",
              role: "Executive Chef",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765962042904-sfbm6x13.jpg",
              imageAlt: "Chef Marco Giovanni"
            },
            {
              id: "2",
              name: "Elena Rossi",
              role: "Sommelier & Wine Director",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765962044328-vp6t507y.jpg",
              imageAlt: "Elena Rossi"
            },
            {
              id: "3",
              name: "David Laurent",
              role: "Front of House Manager",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765962045594-grr9efqd.jpg",
              imageAlt: "David Laurent"
            },
            {
              id: "4",
              name: "Sophie Dubois",
              role: "Pastry Chef",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765962047033-9lp5vrk5.jpg",
              imageAlt: "Sophie Dubois"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Updated"
          title="Join Our Community"
          description="Subscribe to receive exclusive updates about special events, new menu items, and reservation specials."
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765962064904-1wqpmemt.jpg"
          imageAlt="Restaurant dining experience"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSplit
          logoText="Smm Dont Sleep"
          title="Premium dining experience crafted with passion and precision"
          columns={[
            {
              title: "Restaurant",
              items: [
                { label: "Menu", href: "#menu" },
                { label: "Reservations", href: "#contact" },
                { label: "Private Events", href: "#" },
                { label: "Catering", href: "#" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Chef Bio", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Press", href: "#" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Terms & Conditions", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Accessibility", href: "#" }
              ]
            }
          ]}
          contactItems={[
            { icon: Phone, text: "(555) 123-4567" },
            { icon: Mail, text: "hello@smmdntsleep.com" },
            { icon: MapPin, text: "123 Culinary Lane, Food City, FC 12345" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
