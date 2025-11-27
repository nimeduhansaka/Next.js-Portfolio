'use client';
import * as React from 'react';

import {
  HoverCard as HoverCardPrimitive,
  HoverCardTrigger as HoverCardTriggerPrimitive,
  HoverCardContent as HoverCardContentPrimitive,
  HoverCardPortal as HoverCardPortalPrimitive,
  HoverCardArrow as HoverCardArrowPrimitive,
} from '@/components/animate-ui/primitives/radix/hover-card';
import { getStrictContext } from '@/lib/get-strict-context';

const [PreviewLinkCardProvider, usePreviewLinkCard] =
  getStrictContext('PreviewLinkCardContext');

function PreviewLinkCard({
  href,
  src,
  width = 240,
  height = 135,
  deviceScaleFactor = 1,
  colorScheme = 'light',
  ...props
}) {
  const imageSrc =
    src ??
    `https://api.microlink.io/?${buildQueryString({
      url: href,
      screenshot: true,
      meta: false,
      embed: 'screenshot.url',
      colorScheme,
      'viewport.isMobile': true,
      'viewport.deviceScaleFactor': deviceScaleFactor,
      'viewport.width': width * 3,
      'viewport.height': height * 3,
    })}`;

  React.useEffect(() => {
    if (!src) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = imageSrc;
      document.head.appendChild(link);
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [imageSrc, src]);

  return (
    <PreviewLinkCardProvider value={{ href, src: imageSrc, width, height }}>
      <HoverCardPrimitive data-slot="preview-link-card" {...props} />
    </PreviewLinkCardProvider>
  );
}

const PreviewLinkCardTrigger = React.forwardRef(({
  asChild,
  children,
  href: hrefProp,
  ...props
}, ref) => {
  const { href } = usePreviewLinkCard();

  return (
    <HoverCardTriggerPrimitive ref={ref} data-slot="preview-link-card-trigger" asChild {...props}>
      {asChild ? children : <a href={hrefProp ?? href}>{children}</a>}
    </HoverCardTriggerPrimitive>
  );
});
PreviewLinkCardTrigger.displayName = 'PreviewLinkCardTrigger';


function PreviewLinkCardPortal(props) {
  return (<HoverCardPortalPrimitive data-slot="preview-link-card-portal" {...props} />);
}

function buildQueryString(
  params,
) {
  const sp = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) {
    if (v === undefined || v === null) continue;
    sp.append(k, String(v));
  }
  return sp.toString();
}

const PreviewLinkCardContent = React.forwardRef(({
  side = 'top',
  sideOffset = 10,
  align = 'center',
  alignOffset,
  avoidCollisions,
  collisionBoundary,
  collisionPadding,
  arrowPadding,
  sticky,
  hideWhenDetached,
  transition = { type: 'spring', stiffness: 300, damping: 25 },
  asChild,
  children,
  href: hrefProp,
  style,
  ...props
}, ref) => {
  const { href } = usePreviewLinkCard();

  return (
    <HoverCardContentPrimitive
      ref={ref}
      data-slot="preview-link-card-content"
      side={side}
      sideOffset={sideOffset}
      align={align}
      alignOffset={alignOffset}
      avoidCollisions={avoidCollisions}
      collisionBoundary={collisionBoundary}
      collisionPadding={collisionPadding}
      arrowPadding={arrowPadding}
      sticky={sticky}
      hideWhenDetached={hideWhenDetached}
      transition={transition}
      asChild={asChild}
      {...(asChild ? { style, ...props } : {})}>
      {asChild ? (
        children
      ) : (
        <a
          style={{
            display: 'block',
            ...style,
          }}
          href={hrefProp ?? href}
          {...props}>
          {children}
        </a>
      )}
    </HoverCardContentPrimitive>
  );
});
PreviewLinkCardContent.displayName = 'PreviewLinkCardContent';

function PreviewLinkCardImage({
  alt = 'preview image',
  ...props
}) {
  const { src, width, height } = usePreviewLinkCard();

  return <img src={src} width={width} height={height} alt={alt} {...props} />;
}

const PreviewLinkCardArrow = React.forwardRef((props, ref) => (
  <HoverCardArrowPrimitive ref={ref} data-slot="preview-link-card-arrow" {...props} />
));
PreviewLinkCardArrow.displayName = 'PreviewLinkCardArrow';

export { PreviewLinkCard, PreviewLinkCardTrigger, PreviewLinkCardPortal, PreviewLinkCardContent, PreviewLinkCardImage, PreviewLinkCardArrow, usePreviewLinkCard };