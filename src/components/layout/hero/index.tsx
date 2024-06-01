// components/Hero.tsx
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className={styles.heroContainer}>
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className={styles.heroText}>
                        <h1  >Selamat Datang di Website Kami</h1>
                        <p>Perjalanan Anda menuju keunggulan dimulai di sini.</p>
                    </Col>
                    <Col md={6} className="text-end">
                        {isClient && (
                            <Image
                                src="/img/w.png"
                                alt="Logo"
                                width={150}
                                height={150}
                                className={styles.heroImage}
                            />
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Hero;
