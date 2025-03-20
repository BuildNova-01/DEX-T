import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  MenuItem,
  Paper,
  Select,
  Tab,
  Tabs,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Modern hero carousel images
const heroImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1470&auto=format&fit=crop",
];

// Sample Properties with better images
const featuredProperties = [
  {
    id: 1,
    title: "Modern Minimalist Villa",
    location: "Bogor, Jawa Barat",
    price: "$425,000",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1470&auto=format&fit=crop",
    area: "360m²",
    bedrooms: 4,
    bathrooms: 3,
  },
  {
    id: 2,
    title: "Luxury Urban Apartment",
    location: "Jakarta, Jawa Barat",
    price: "$535,000",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1470&auto=format&fit=crop",
    area: "280m²",
    bedrooms: 3,
    bathrooms: 2,
  },
  {
    id: 3,
    title: "Eco-Friendly Family Home",
    location: "Bandung, Jawa Barat",
    price: "$390,000",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1470&auto=format&fit=crop",
    area: "420m²",
    bedrooms: 5,
    bathrooms: 4,
  },
];

const popularCities = [
  {
    id: 1,
    name: "New York",
    properties: 235,
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Los Angeles",
    properties: 182,
    image:
      "https://images.unsplash.com/photo-1580655653885-65763b2597d0?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Chicago",
    properties: 143,
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Miami",
    properties: 112,
    image:
      "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?q=80&w=1470&auto=format&fit=crop",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Home Buyer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop",
    text: "Finding our dream home was so easy with this platform. The search tools and filters helped us narrow down exactly what we wanted.",
  },
  {
    id: 2,
    name: "David Thompson",
    role: "Property Investor",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop",
    text: "As an investor, I've used many real estate sites, but this one has the best analytics and neighborhood data by far.",
  },
  {
    id: 3,
    name: "Emily Parker",
    role: "First-time Buyer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop",
    text: "The virtual tours saved me so much time. I was able to narrow down my choices before even stepping out my door.",
  },
];

const Home: React.FC = () => {
  const theme = useTheme();
  const [propertyType, setPropertyType] = useState<string>("buy");

  const handlePropertyTypeChange = (
    event: React.SyntheticEvent,
    newValue: string
  ) => {
    setPropertyType(newValue);
  };

  return (
    <Box sx={{ bgcolor: "#FFFFFF" }}>
      {/* Hero Section with Carousel */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "600px", md: "700px" },
          overflow: "hidden",
          mb: 8,
        }}
      >
        {/* Hero Carousel */}
        <Box sx={{ height: "100%", width: "100%", position: "absolute" }}>
          <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            effect="fade"
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            style={{ height: "100%" }}
          >
            {heroImages.map((image, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    height: "100%",
                    width: "100%",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0,0,0,0.4)",
                      zIndex: 1,
                    },
                  }}
                >
                  <img
                    src={image}
                    alt={`Luxury Home ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        {/* Hero Content */}
        <Container
          maxWidth="lg"
          sx={{
            height: "100%",
            position: "relative",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box sx={{ py: 4, pr: { md: 6 } }}>
                <Typography
                  variant="overline"
                  sx={{
                    color: "#fff",
                    fontWeight: 600,
                    letterSpacing: 2,
                  }}
                >
                  PREMIUM REAL ESTATE
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    color: "#fff",
                    fontWeight: 800,
                    mb: 2,
                    textShadow: "0px 2px 4px rgba(0,0,0,0.3)",
                  }}
                >
                  Discover Your Perfect Home
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#fff",
                    mb: 4,
                    lineHeight: 1.6,
                    fontWeight: 400,
                    textShadow: "0px 1px 3px rgba(0,0,0,0.3)",
                  }}
                >
                  Find your dream property with our exclusive listings and
                  personalized search experience.
                </Typography>

                {/* Property Search Form */}
                <Paper
                  elevation={6}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    backdropFilter: "blur(10px)",
                    bgcolor: "rgba(255, 255, 255, 0.9)",
                  }}
                >
                  <Tabs
                    value={propertyType}
                    onChange={handlePropertyTypeChange}
                    sx={{
                      mb: 3,
                      "& .MuiTabs-indicator": {
                        height: 3,
                        borderRadius: 1.5,
                      },
                    }}
                  >
                    <Tab
                      label="Buy"
                      value="buy"
                      sx={{ fontWeight: 600, fontSize: "1rem" }}
                    />
                    <Tab
                      label="Rent"
                      value="rent"
                      sx={{ fontWeight: 600, fontSize: "1rem" }}
                    />
                  </Tabs>

                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="subtitle2" gutterBottom>
                        Location
                      </Typography>
                      <Select
                        fullWidth
                        defaultValue="bogor"
                        size="small"
                        sx={{ mb: 2, borderRadius: 1 }}
                      >
                        <MenuItem value="bogor">Bogor, Jawa Barat</MenuItem>
                        <MenuItem value="jakarta">Jakarta</MenuItem>
                        <MenuItem value="bandung">Bandung</MenuItem>
                      </Select>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle2" gutterBottom>
                        Property Type
                      </Typography>
                      <Select
                        fullWidth
                        defaultValue="home"
                        size="small"
                        sx={{ mb: 2, borderRadius: 1 }}
                      >
                        <MenuItem value="home">Home</MenuItem>
                        <MenuItem value="apartment">Apartment</MenuItem>
                        <MenuItem value="villa">Villa</MenuItem>
                      </Select>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Typography variant="subtitle2" gutterBottom>
                        Price Range
                      </Typography>
                      <Select
                        fullWidth
                        defaultValue="200-350"
                        size="small"
                        sx={{ mb: 2, borderRadius: 1 }}
                      >
                        <MenuItem value="100-200">$100,000-$200,000</MenuItem>
                        <MenuItem value="200-350">$200,000-$350,000</MenuItem>
                        <MenuItem value="350-500">$350,000-$500,000</MenuItem>
                      </Select>
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        fullWidth
                        variant="contained"
                        size="large"
                        sx={{
                          bgcolor: theme.palette.primary.main,
                          color: "#fff",
                          py: 1.5,
                          mt: 1,
                          borderRadius: 2,
                          textTransform: "none",
                          fontSize: "1rem",
                          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
                          "&:hover": {
                            bgcolor: theme.palette.primary.dark,
                            boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.2)",
                          },
                        }}
                      >
                        Find Properties
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Featured Properties */}
      <Container sx={{ mb: 10 }}>
        <Box
          sx={{
            mb: 6,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "flex-end" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Box>
            <Typography
              variant="overline"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 600,
                letterSpacing: 2,
                display: "block",
                mb: 1,
              }}
            >
              FEATURED PROPERTIES
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 700,
                mb: 2,
              }}
            >
              Exceptional Homes
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: "600px" }}
            >
              Discover our handpicked selection of the finest architectural
              masterpieces and luxury properties available on the market.
            </Typography>
          </Box>
          <Button
            variant="outlined"
            sx={{
              mt: { xs: 2, md: 0 },
              color: theme.palette.primary.main,
              borderColor: theme.palette.primary.main,
              fontWeight: 600,
              borderRadius: 2,
              py: 1,
              px: 3,
              textTransform: "none",
            }}
          >
            View All Properties
          </Button>
        </Box>

        <Grid container spacing={4}>
          {featuredProperties.map((property) => (
            <Grid item xs={12} md={4} key={property.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.08)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.12)",
                  },
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    height="260"
                    image={property.image}
                    alt={property.title}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      bgcolor: "rgba(255, 255, 255, 0.9)",
                      borderRadius: 10,
                      px: 2,
                      py: 0.5,
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      color="primary"
                      fontWeight={600}
                    >
                      {property.price}
                    </Typography>
                  </Box>
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      textAlign: "left",
                    }}
                  >
                    {property.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2, display: "flex", alignItems: "center" }}
                  >
                    <Box
                      component="span"
                      sx={{
                        display: "inline-block",
                        width: 6,
                        height: 6,
                        bgcolor: theme.palette.primary.main,
                        borderRadius: "50%",
                        mr: 1,
                      }}
                    />
                    {property.location}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 3,
                      pt: 2,
                      borderTop: 1,
                      borderColor: "rgba(0,0,0,0.08)",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Typography variant="body2" color="text.secondary">
                        {property.area}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mr: 2 }}
                      >
                        {property.bedrooms} Beds
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {property.bathrooms} Baths
                      </Typography>
                    </Box>
                  </Box>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 2,
                      bgcolor: theme.palette.primary.main,
                      color: "#fff",
                      py: 1.2,
                      fontWeight: 600,
                      borderRadius: 2,
                      textTransform: "none",
                      "&:hover": {
                        bgcolor: theme.palette.primary.dark,
                      },
                    }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Explore Cities */}
      <Box sx={{ bgcolor: "#f8fafc", py: 10, mb: 10 }}>
        <Container>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="overline"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 600,
                letterSpacing: 2,
                display: "block",
                mb: 1,
              }}
            >
              DISCOVER
            </Typography>
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 700,
                mb: 2,
              }}
            >
              Explore by Location
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                maxWidth: "700px",
                mx: "auto",
              }}
            >
              Find your perfect home in these sought-after locations
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {popularCities.map((city) => (
              <Grid item xs={12} sm={6} md={3} key={city.id}>
                <Paper
                  sx={{
                    position: "relative",
                    height: "280px",
                    overflow: "hidden",
                    borderRadius: 3,
                    cursor: "pointer",
                    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.08)",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.03)",
                      "& .city-overlay": {
                        background: "rgba(0,0,0,0.5)",
                      },
                      "& .city-img": {
                        transform: "scale(1.1)",
                      },
                    },
                  }}
                >
                  <Box
                    className="city-img"
                    component="img"
                    src={city.image}
                    alt={city.name}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease-out",
                    }}
                  />
                  <Box
                    className="city-overlay"
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: 2.5,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2) 60%, rgba(0,0,0,0))",
                      transition: "background 0.3s",
                    }}
                  >
                    <Typography variant="h6" color="white" fontWeight={700}>
                      {city.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="white"
                      sx={{ opacity: 0.9 }}
                    >
                      {city.properties} Properties
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Us */}
      <Container sx={{ mb: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative" }}>
              <img
                src="https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1374&auto=format&fit=crop"
                alt="Interior Design"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "16px",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                }}
              />
              <Paper
                sx={{
                  position: "absolute",
                  bottom: -30,
                  right: -30,
                  width: "220px",
                  p: 3,
                  borderRadius: 2,
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
                  background: "#fff",
                  display: { xs: "none", md: "block" },
                }}
              >
                <Typography variant="h4" color="primary" fontWeight={800}>
                  15+
                </Typography>
                <Typography variant="body1" fontWeight={600}>
                  Years of Experience
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  We've helped thousands find their perfect home
                </Typography>
              </Paper>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="overline"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 600,
                letterSpacing: 2,
                display: "block",
                mb: 1,
              }}
            >
              WHY CHOOSE US
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 700,
                mb: 3,
              }}
            >
              Your trusted real estate partner
            </Typography>

            <Grid container spacing={4} sx={{ mb: 4 }}>
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    mb: 3,
                    p: 2,
                    borderRadius: 3,
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
                    bgcolor: "#fff",
                    height: "100%",
                  }}
                >
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    Trusted Partners
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    We work exclusively with reputable developers and certified
                    agents who meet our strict quality standards.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    mb: 3,
                    p: 2,
                    borderRadius: 3,
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
                    bgcolor: "#fff",
                    height: "100%",
                  }}
                >
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    Personalized Service
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Our dedicated experts provide personalized guidance
                    throughout your property journey.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    mb: 3,
                    p: 2,
                    borderRadius: 3,
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
                    bgcolor: "#fff",
                    height: "100%",
                  }}
                >
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    Financing Solutions
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Access our network of financial partners offering
                    competitive rates and flexible terms.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    mb: 3,
                    p: 2,
                    borderRadius: 3,
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
                    bgcolor: "#fff",
                    height: "100%",
                  }}
                >
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    Exclusive Listings
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Get privileged access to premium properties before they hit
                    the open market.
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Button
              variant="contained"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                bgcolor: theme.palette.primary.main,
                fontWeight: 600,
                borderRadius: 2,
                textTransform: "none",
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  bgcolor: theme.palette.primary.dark,
                  boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              Learn More About Us
            </Button>
          </Grid>
        </Grid>
      </Container>

      {/* Testimonials with Carousel */}
      <Box sx={{ bgcolor: "#f8fafc", py: 10, mb: 10 }}>
        <Container>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="overline"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 600,
                letterSpacing: 2,
                display: "block",
                mb: 1,
              }}
            >
              TESTIMONIALS
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 700,
                mb: 2,
              }}
            >
              What Our Clients Say
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: "700px", mx: "auto" }}
            >
              Hear from our satisfied clients who found their perfect homes
            </Typography>
          </Box>

          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <Paper
                  sx={{
                    p: 4,
                    height: "100%",
                    minHeight: "220px",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 3,
                    boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.05)",
                    m: 1,
                    mb: 6,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ mb: 3, flexGrow: 1, fontStyle: "italic" }}
                  >
                    "{testimonial.text}"
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      component="img"
                      src={testimonial.image}
                      alt={testimonial.name}
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        mr: 2,
                      }}
                    />
                    <Box>
                      <Typography variant="subtitle1" fontWeight={700}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Box>

      {/* Newsletter Section */}
      <Container sx={{ mb: 10 }}>
        <Paper
          sx={{
            borderRadius: 4,
            p: { xs: 4, md: 6 },
            bgcolor: theme.palette.primary.main,
            color: "white",
            boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography variant="h3" fontWeight={700} gutterBottom>
                Find Your Dream Home Today
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9, mb: 2 }}>
                Subscribe to our newsletter and be the first to see new
                properties, exclusive offers and market insights.
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box sx={{ display: "flex", gap: 1 }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Enter your email"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      bgcolor: "rgba(255,255,255,0.9)",
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                      },
                    },
                  }}
                />
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: "white",
                    color: theme.palette.primary.main,
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.9)",
                    },
                    fontWeight: 600,
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Home;
