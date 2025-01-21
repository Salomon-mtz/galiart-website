'use client';

import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Box, 
  IconButton, 
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery
} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/contacto', label: 'Contacto' }
  ];

  const allLinks = [
    ...navLinks,
    { href: '/cotizar', label: 'Cotiza ahora' }
  ];

  const isActiveLink = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const mobileMenu = (
    <Box className="h-full bg-white p-4">
      <Box className="flex justify-end mb-4">
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {allLinks.map((link) => (
          <ListItem 
            key={link.href}
            onClick={handleDrawerToggle}
            className={`rounded-[30px] mb-2 ${
              isActiveLink(link.href) 
                ? 'bg-blue-50 text-blue-600 font-bold' 
                : 'hover:bg-gray-50'
            }`}
          >
            <Link href={link.href} className="w-full py-2">
              <ListItemText primary={link.label} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed" className="bg-white shadow-none">
      <Toolbar className="container mx-auto justify-between">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="Galiart Logo"
            width={120}
            height={40}
            className="cursor-pointer"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <Box className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={`text-gray-800 hover:text-blue-600 transition-colors ${
                isActiveLink(link.href) ? 'font-bold' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button 
            variant="contained" 
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-[30px]"
          >
            Cotiza ahora
          </Button>
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className="md:hidden"
        >
          <MenuIcon className="text-gray-800" />
        </IconButton>

        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better mobile performance
          }}
          className="md:hidden"
          PaperProps={{
            className: 'w-[280px]'
          }}
        >
          {mobileMenu}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;