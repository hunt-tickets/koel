import { ReactNode } from 'react';
import { typography, HeadingLevel } from '@/app/config/typography';

interface HeadingProps {
  level?: HeadingLevel;
  size?: 'default' | 'mobile';
  className?: string;
  children: ReactNode;
  gradient?: boolean;
}

/**
 * Componente de encabezado centralizado
 *
 * Uso:
 * <Heading level="h1">Título Principal</Heading>
 * <Heading level="h2" gradient>Título con Gradiente</Heading>
 */
export function Heading({
  level = 'h2',
  size = 'default',
  className = '',
  children,
  gradient = false,
}: HeadingProps) {
  const Tag = level;
  const baseClasses = typography.headingClasses[level];
  const sizeConfig = typography.sizes[level];
  const sizeClasses = typeof sizeConfig === 'string' ? sizeConfig : sizeConfig[size];

  const classes = `${baseClasses} ${sizeClasses} ${
    gradient ? 'text-gradient-koel' : ''
  } ${className}`.trim();

  return <Tag className={classes}>{children}</Tag>;
}

interface TextProps {
  variant?: 'body' | 'bodyLight' | 'bodyMedium' | 'bodySemibold' | 'bodyBold';
  className?: string;
  children: ReactNode;
  as?: 'p' | 'span' | 'div';
}

/**
 * Componente de texto centralizado
 *
 * Uso:
 * <Text>Texto normal</Text>
 * <Text variant="bodyBold">Texto en negrita</Text>
 */
export function Text({
  variant = 'body',
  className = '',
  children,
  as = 'p',
}: TextProps) {
  const Tag = as;
  const baseClasses = typography.textClasses[variant];
  const classes = `${baseClasses} ${className}`.trim();

  return <Tag className={classes}>{children}</Tag>;
}

/**
 * Componente especializado para títulos de sección (H2)
 *
 * Uso:
 * <SectionTitle>Mi Título</SectionTitle>
 * <SectionTitle gradient="Texto con Gradiente">Texto Normal</SectionTitle>
 */
interface SectionTitleProps {
  children: ReactNode;
  gradient?: ReactNode;
  className?: string;
}

export function SectionTitle({
  children,
  gradient,
  className = '',
}: SectionTitleProps) {
  return (
    <Heading level="h2" className={`text-koel-neutral-900 mb-4 ${className}`}>
      {children}
      {gradient && <span className="text-gradient-koel"> {gradient}</span>}
    </Heading>
  );
}

/**
 * Componente especializado para subtítulos de sección
 */
interface SectionSubtitleProps {
  children: ReactNode;
  className?: string;
}

export function SectionSubtitle({
  children,
  className = '',
}: SectionSubtitleProps) {
  return (
    <Text
      variant="body"
      className={`text-xl text-koel-neutral-600 max-w-3xl mx-auto ${className}`}
    >
      {children}
    </Text>
  );
}
