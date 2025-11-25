import {
    PreviewLinkCard,
    PreviewLinkCardTrigger,
    PreviewLinkCardContent,
    PreviewLinkCardImage,
} from '@/components/animate-ui/components/radix/preview-link-card';

export const RadixPreviewLinkCardDemo = ({
                                             side,
                                             sideOffset,
                                             align,
                                             alignOffset,
                                             followCursor,
                                             href = "https://periodic-table-ui.pages.dev/",
                                         }) => {
    return (
        (<p className="z-100 text-muted-foreground">
            Checkout{' '}
            <PreviewLinkCard src="/periodic-preview.png" href={href} followCursor={followCursor}>
                <PreviewLinkCardTrigger
                    target="_blank"
                    className="relative group text-transparent bg-clip-text bg-[linear-gradient(90deg,#06b6d4,#8b5cf6,#f59e0b,#10b981)]"
                >
                    My Latest Work
                    <span className="absolute bottom-0 left-0 w-full h-px bg-[linear-gradient(90deg,#06b6d4,#8b5cf6,#f59e0b,#10b981)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </PreviewLinkCardTrigger>

                <PreviewLinkCardContent
                    side={side}
                    sideOffset={sideOffset}
                    align={align}
                    alignOffset={alignOffset}
                    target="_blank"
                >
                    <PreviewLinkCardImage alt="Periodic Table UI" />
                </PreviewLinkCardContent>
            </PreviewLinkCard>{' '}
            — hover to preview, click to dive in.
        </p>)
    );
};