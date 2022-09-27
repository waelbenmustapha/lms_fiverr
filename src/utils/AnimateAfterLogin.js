import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

function AnimateAfterLogin({ children }) {
  const location = useLocation();
  return location?.state?.from === "login" ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      {children}
    </motion.div>
  ) : (
    <>{children}</>
  );
}

export default AnimateAfterLogin;
