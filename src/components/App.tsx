@@ .. @@
import Services from './components/Services';
import Activities from './components/Activities';
import News from './components/News';
+import NewsPage from './components/NewsPage';
import Footer from './components/Footer';
import WiFiAd from './components/WiFiAd';

@@ .. @@
      case 'pengumuman':
        return <Announcements fullPage={true} />;
+      case 'berita':
+        return <NewsPage />;
      case 'layanan':
        return <Services />;