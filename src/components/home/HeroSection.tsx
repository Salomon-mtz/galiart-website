'use client';

import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <Box className="bg-blue-50 min-h-screen flex items-center pt-20">
      <Container>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h1" className="text-4xl md:text-5xl font-bold mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
              <Typography className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
              
              <Box className="flex flex-wrap gap-4 mb-8">
                <Button 
                  variant="contained" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
                >
                  Cotiza ahora
                </Button>
                <Button 
                  variant="outlined" 
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2"
                >
                  Descubre más
                </Button>
              </Box>

              <Box className="flex flex-wrap gap-4">
                {['Certificación 1', 'Certificación 2', 'Certificación 3'].map((cert, index) => (
                  <Box key={index} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-600" />
                    <Typography>{cert}</Typography>
                  </Box>
                ))}
              </Box>

              <Box className="mt-8">
                <Typography className="text-gray-600 mb-4">
                  Más de 40 empresas confían en GALIART
                </Typography>
                <Box className="flex gap-4">
                  {['Stark', 'Meta', 'Apple', 'Skype'].map((company, index) => (
                    <Box 
                      key={index}
                      className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center"
                    >
                      {company[0]}
                    </Box>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] md:h-[500px]"
            >
              <Image
                src="/images/boxes.png"
                alt="Cajas de envío"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;