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
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '120px',
                            height: '120px',
                            borderRadius: '50%',
                            background: '#fff',
                            overflow: 'hidden',
                            marginBottom: '20px',
                            boxShadow: '0 0 40px rgba(255,255,255,0.1)',
                        }}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={`https://aryayama.netlify.app/me.jpeg`}
                            alt={PROFILE.name}
                            width="120"
                            height="120"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <h1
                        style={{
                            fontSize: '80px',
                            fontWeight: 'bold',
                            color: 'white',
                            margin: 0,
                            letterSpacing: '-0.05em',
                            lineHeight: 1,
                        }}
                    >
                        {PROFILE.name}
                    </h1>
                    <p
                        style={{
                            fontSize: '30px',
                            color: '#a3a3a3',
                            margin: 0,
                            maxWidth: '800px',
                            textAlign: 'center',
                            lineHeight: 1.5,
                        }}
                    >
                        {PROFILE.description}
                    </p>
                </div>

                <div
                    style={{
                        position: 'absolute',
                        bottom: 40,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        color: '#525252',
                        fontSize: '20px',
                    }}
                >
                    <span>aryayama.netlify.app</span>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
