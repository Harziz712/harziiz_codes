import { motion } from "framer-motion";

export const SocialIcon = ({ 
  icon: Icon, 
  href, 
  delay = 0 
}: { 
  icon: any; 
  href: string; 
  delay?: number 
}) => (
  <motion.a
    href={href}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="w-10 h-10 bg-neutral-800 border border-neutral-700 rounded-lg flex items-center justify-center text-neutral-400  hover:animate-bounce"
  >
    <Icon size={18} />
  </motion.a>
)
