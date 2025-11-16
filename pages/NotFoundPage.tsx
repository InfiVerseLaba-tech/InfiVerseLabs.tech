
import React from 'react';
import { Link } from 'react-router-dom';
import GradientButton from '../components/ui/GradientButton';
import GradientText from '../components/ui/GradientText';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-9xl font-bold text-slate-700">404</h1>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4">
          Universe <GradientText>Not Found</GradientText>
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-lg text-slate-300">
          Oops! The page you're looking for seems to have drifted into a black hole.
        </p>
        <div className="mt-8">
          <GradientButton href="/">Return to Homepage</GradientButton>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
