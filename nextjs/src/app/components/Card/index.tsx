'use client'

import { Box, Image, Text, Button } from '@chakra-ui/react';

interface CardProps {
    imageSrc: string;
    title: string;
    description: React.ReactNode;
    buttonText: string;
  }

import "./style.css"

export default function Card({ imageSrc, title, description, buttonText }: CardProps) {
    return (
        <div className="products__list--card">
            <Box
                maxW="sm"
                borderWidth="0px"
                borderRadius="lg"
                boxShadow="md"
                p="20"
                textAlign="center"
            >
                <Image src={imageSrc} alt={title} borderRadius="md" />
        
                <Box mt="4">
                <Text fontSize="xl" fontWeight="bold">
                    {title}
                </Text>
                <Text mt="2" fontSize="md">
                    {description}
                </Text>
                </Box>
        
                <Button
                    mt="4"
                    colorScheme="teal"
                    size="md"
                    >
                    {buttonText}
                </Button>
            </Box>
        </div>
    );
  }