import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    this.setState({ error, info });
    
    console.error('ErrorBoundary caught', error, info);
  }

  render() {
    if (this.state.hasError) {
      const errorText = this.state.error ? (this.state.error.stack || this.state.error.toString()) : 'Unknown Error';
      const infoText = this.state.info?.componentStack || '';
      const payload = {
        error: this.state.error ? (this.state.error.message || this.state.error.toString()) : 'Unknown',
        stack: errorText,
        componentStack: infoText,
        url: typeof window !== 'undefined' ? window.location.href : null,
        pathname: typeof window !== 'undefined' ? window.location.pathname : null,
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : null,
      };

      return (
        <div className="min-h-screen flex items-center justify-center bg-white p-6">
          <div className="max-w-3xl w-full border border-red-200 rounded-md p-6 bg-red-50">
            <h2 className="text-xl font-bold text-red-700 mb-2">Terjadi kesalahan di aplikasi</h2>
            <p className="text-sm text-red-600 mb-4">Silakan kirim pesan error ini ke tim developer untuk perbaikan.</p>

            <div className="mb-3">
              <pre className="text-xs text-red-800 whitespace-pre-wrap bg-white p-3 rounded border border-red-100 overflow-auto">{errorText}</pre>
            </div>

            <details className="mt-3 text-xs text-gray-700">
              <summary className="cursor-pointer">Stack / Info (klik untuk buka)</summary>
              <pre className="whitespace-pre-wrap mt-2">{infoText}</pre>
            </details>

            <div className="mt-4 flex gap-2">
              <button
                className="px-3 py-1 bg-red-600 text-white rounded text-sm"
                onClick={() => { try { navigator.clipboard.writeText(JSON.stringify(payload, null, 2)); alert('Detail error disalin ke clipboard'); } catch (e) { console.error('Copy failed', e); alert('Tidak bisa menyalin otomatis. Buka console untuk melihat detail.'); } }}
              >
                Salin detail error
              </button>

              <button
                className="px-3 py-1 bg-gray-700 text-white rounded text-sm"
                onClick={() => { if (typeof window !== 'undefined') window.location.reload(); }}
              >
                Muat ulang halaman
              </button>

              <button
                className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
                onClick={() => { console.error('ErrorBoundary payload:', payload); alert('Error sudah dicetak di console'); }}
              >
                Tampilkan di console
              </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
