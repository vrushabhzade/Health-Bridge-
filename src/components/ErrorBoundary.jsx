import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
        this.state = { hasError: true, error, errorInfo };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                }}>
                    <div style={{
                        background: 'white',
                        borderRadius: '1rem',
                        padding: '2rem',
                        maxWidth: '600px',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
                    }}>
                        <h1 style={{ color: '#dc2626', marginBottom: '1rem' }}>
                            ⚠️ Oops! Something went wrong
                        </h1>
                        <p style={{ marginBottom: '1rem', color: '#374151' }}>
                            The application encountered an error. This might be due to:
                        </p>
                        <ul style={{ marginBottom: '1.5rem', color: '#6b7280' }}>
                            <li>Firebase connection issues</li>
                            <li>Network connectivity problems</li>
                            <li>Browser compatibility issues</li>
                        </ul>

                        <details style={{ marginBottom: '1.5rem' }}>
                            <summary style={{ cursor: 'pointer', color: '#4f46e5', fontWeight: 'bold' }}>
                                Technical Details
                            </summary>
                            <pre style={{
                                background: '#f3f4f6',
                                padding: '1rem',
                                borderRadius: '0.5rem',
                                overflow: 'auto',
                                fontSize: '0.875rem',
                                marginTop: '0.5rem'
                            }}>
                                {this.state.error && this.state.error.toString()}
                                {this.state.errorInfo && this.state.errorInfo.componentStack}
                            </pre>
                        </details>

                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <button
                                onClick={() => window.location.reload()}
                                style={{
                                    background: '#4f46e5',
                                    color: 'white',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '0.5rem',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontWeight: 'bold',
                                    fontSize: '1rem'
                                }}
                            >
                                🔄 Reload Page
                            </button>
                            <button
                                onClick={() => {
                                    localStorage.clear();
                                    window.location.reload();
                                }}
                                style={{
                                    background: '#dc2626',
                                    color: 'white',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '0.5rem',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontWeight: 'bold',
                                    fontSize: '1rem'
                                }}
                            >
                                🗑️ Clear Cache & Reload
                            </button>
                        </div>

                        <p style={{ marginTop: '1.5rem', fontSize: '0.875rem', color: '#6b7280' }}>
                            If the problem persists, please check:
                            <br />
                            • Your internet connection
                            <br />
                            • Browser console (F12) for detailed errors
                            <br />
                            • Firebase Console for service status
                        </p>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
