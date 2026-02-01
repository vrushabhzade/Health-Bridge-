import React from 'react';
import { MapPin, Star, Languages, Video, Award, Phone, Mail, MessageCircle, Globe, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const ProviderCard = ({ doctor, onBook }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-panel"
            style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'transform 0.2s',
            }}
            whileHover={{ y: -5, borderColor: 'var(--color-accent)' }}
        >
            <div style={{ display: 'flex', gap: '1rem' }}>
                <img
                    src={doctor.image}
                    alt={doctor.name}
                    style={{ width: '80px', height: '80px', borderRadius: '12px', objectFit: 'cover' }}
                />
                <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>{doctor.name}</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#fbbf24', fontWeight: 'bold' }}>
                            <Star size={16} fill="#fbbf24" /> {doctor.rating}
                            {doctor.ratingCount > 0 && (
                                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 'normal' }}>
                                    ({doctor.ratingCount})
                                </span>
                            )}
                        </div>
                    </div>
                    {doctor.isRecommended && (
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem', padding: '0.15rem 0.5rem', background: 'rgba(56, 189, 248, 0.2)', color: '#38bdf8', borderRadius: '50px', marginBottom: '0.5rem', fontWeight: 'bold', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
                            <Award size={12} /> AI Recommended
                        </div>
                    )}
                    <p style={{ color: 'var(--color-accent)', fontWeight: '500', fontSize: '0.9rem' }}>{doctor.specialty}</p>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>{doctor.qualification}</p>
                </div>
            </div>

            {/* Equity & Info Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem', padding: '0.25rem 0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', color: 'var(--color-text-secondary)' }}>
                    <MapPin size={14} /> {doctor.distance} km away
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem', padding: '0.25rem 0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', color: 'var(--color-text-secondary)' }}>
                    <Languages size={14} /> {doctor.languages.join(', ')}
                </div>
                {doctor.isFemale && (
                    <div style={{ fontSize: '0.8rem', padding: '0.25rem 0.5rem', background: 'rgba(236, 72, 153, 0.2)', borderRadius: '4px', color: '#fba6e4' }}>
                        Female Doctor
                    </div>
                )}
            </div>

            {/* Contact Buttons */}
            {(doctor.phone || doctor.email || doctor.socialMedia?.whatsapp) && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                    {doctor.phone && (
                        <a
                            href={`tel:${doctor.phone}`}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.25rem',
                                fontSize: '0.75rem',
                                padding: '0.4rem 0.7rem',
                                background: 'rgba(34, 197, 94, 0.2)',
                                color: '#22c55e',
                                borderRadius: '6px',
                                textDecoration: 'none',
                                border: '1px solid rgba(34, 197, 94, 0.3)',
                                fontWeight: '500'
                            }}
                        >
                            <Phone size={14} /> Call
                        </a>
                    )}
                    {doctor.socialMedia?.whatsapp && (
                        <a
                            href={doctor.socialMedia.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.25rem',
                                fontSize: '0.75rem',
                                padding: '0.4rem 0.7rem',
                                background: 'rgba(37, 211, 102, 0.2)',
                                color: '#25d366',
                                borderRadius: '6px',
                                textDecoration: 'none',
                                border: '1px solid rgba(37, 211, 102, 0.3)',
                                fontWeight: '500'
                            }}
                        >
                            <MessageCircle size={14} /> WhatsApp
                        </a>
                    )}
                    {doctor.email && (
                        <a
                            href={`mailto:${doctor.email}`}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.25rem',
                                fontSize: '0.75rem',
                                padding: '0.4rem 0.7rem',
                                background: 'rgba(59, 130, 246, 0.2)',
                                color: '#3b82f6',
                                borderRadius: '6px',
                                textDecoration: 'none',
                                border: '1px solid rgba(59, 130, 246, 0.3)',
                                fontWeight: '500'
                            }}
                        >
                            <Mail size={14} /> Email
                        </a>
                    )}
                    {doctor.website && (
                        <a
                            href={doctor.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.25rem',
                                fontSize: '0.75rem',
                                padding: '0.4rem 0.7rem',
                                background: 'rgba(168, 85, 247, 0.2)',
                                color: '#a855f7',
                                borderRadius: '6px',
                                textDecoration: 'none',
                                border: '1px solid rgba(168, 85, 247, 0.3)',
                                fontWeight: '500'
                            }}
                        >
                            <Globe size={14} /> Website
                        </a>
                    )}
                </div>
            )}

            {/* Address */}
            {doctor.address && (
                <div style={{
                    fontSize: '0.8rem',
                    color: 'var(--color-text-muted)',
                    marginTop: '0.5rem',
                    display: 'flex',
                    gap: '0.25rem',
                    alignItems: 'flex-start'
                }}>
                    <MapPin size={14} style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span>{doctor.address}</span>
                </div>
            )}

            {/* Social Media Links */}
            {doctor.socialMedia && Object.values(doctor.socialMedia).some(v => v && v !== '') && (
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
                    {doctor.socialMedia.facebook && (
                        <a href={doctor.socialMedia.facebook} target="_blank" rel="noopener noreferrer"
                            style={{ color: '#1877f2', opacity: 0.8 }} title="Facebook">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                    )}
                    {doctor.socialMedia.instagram && (
                        <a href={doctor.socialMedia.instagram} target="_blank" rel="noopener noreferrer"
                            style={{ color: '#E4405F', opacity: 0.8 }} title="Instagram">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                    )}
                    {doctor.socialMedia.linkedin && (
                        <a href={doctor.socialMedia.linkedin} target="_blank" rel="noopener noreferrer"
                            style={{ color: '#0077b5', opacity: 0.8 }} title="LinkedIn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                    )}
                    {doctor.socialMedia.twitter && (
                        <a href={doctor.socialMedia.twitter} target="_blank" rel="noopener noreferrer"
                            style={{ color: '#1DA1F2', opacity: 0.8 }} title="Twitter">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                        </a>
                    )}
                    {doctor.socialMedia.youtube && (
                        <a href={doctor.socialMedia.youtube} target="_blank" rel="noopener noreferrer"
                            style={{ color: '#FF0000', opacity: 0.8 }} title="YouTube">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                        </a>
                    )}
                </div>
            )}

            <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)', margin: '0.75rem 0' }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Next Available</span>
                    <div style={{ fontWeight: '600', color: 'var(--color-success)' }}>Today, 2:00 PM</div>
                </div>
                <button
                    onClick={() => onBook(doctor)}
                    style={{
                        background: 'var(--color-accent)',
                        color: 'white',
                        border: 'none',
                        padding: '0.6rem 1.25rem',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: '600',
                        display: 'flex', alignItems: 'center', gap: '0.5rem'
                    }}
                >
                    <Video size={18} /> Consult
                </button>
            </div>
        </motion.div>
    );
};

export default ProviderCard;
