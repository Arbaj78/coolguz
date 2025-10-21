import { Cloudinary } from "@cloudinary/url-gen";
import { quality } from "@cloudinary/url-gen/actions/delivery";
import { auto as qAuto } from "@cloudinary/url-gen/qualifiers/quality";
import { format } from "@cloudinary/url-gen/actions/delivery";
import { auto as fAuto } from "@cloudinary/url-gen/qualifiers/format";

// 1. Cloudinary Instance
export const cld = new Cloudinary({
  cloud: {
    cloudName: 'daank7fpj' // Aapka cloud name
  }
});

// 2. Testimonials Data Array
export const testimonials = [
  {
    name: "Oliver Trace ",
    role: "CEO, 2050 cards",
    quote: "Working with this team transformed our business. Their expertise and dedication are unmatched.",
    videoPublicId: "testimonial-video1_ruuioi"
  },
  {
    name: "Foram Brown",
    role: "ex-Rolls-Royce, Bombardier",
    quote: "The results we achieved exceeded all our expectations. Highly recommended!",
    videoPublicId: "testimonial-video2_skwqaw"
  },
  {
    name: "Rali David",
    role: "Founder & CEO, Thenaturalhacks",
    quote: "Fatcamel’s service is exceptional! Even after my automation was complete, they were always quick to help with any changes I needed.",
    videoPublicId: "testimonial3_ycnfyg"
  }
];

// 3. Helper function to get optimized video URL
export const getCloudinaryVideoUrl = (publicId) => {
  return cld.video(publicId)
    .delivery(quality(qAuto()))
    .delivery(format(fAuto()))
    .toURL();
};