import { ImageResponse } from 'next/og';
import { PROFILE } from '@/data/profile';

export const runtime = 'edge';

export const alt = PROFILE.name;
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#0a0a0a',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                    position: 'relative',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to bottom right, #1a1a1a 0%, #000000 100%)',
                        zIndex: -1,
                    }}
                />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '20px',
                    }}
                >
                    <h1
                        style={{
                            fontSize: '100px',
                            fontWeight: 'bold',
                            color: 'white',
                            margin: 0,
                            letterSpacing: '-0.05em',
                        }}
                    >
                        {PROFILE.name}
                    </h1>
                    <p
                        style={{
                            fontSize: '32px',
                            color: '#a3a3a3',
                            margin: 0,
                            maxWidth: '900px',
                            textAlign: 'center',
                        }}
                    >
                        Full Stack Developer & AI Engineer
                    </p>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
