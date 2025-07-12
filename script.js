document.addEventListener('DOMContentLoaded', () => {
    const albumFolders = document.querySelectorAll('.album-folder');
    const modal = document.getElementById('album-modal');
    const closeButton = document.querySelector('.close-button');
    const modalAlbumTitle = document.getElementById('modal-album-title');
    const modalAlbumImages = document.getElementById('modal-album-images');

    // Data dummy untuk album tersembunyi
    // Anda perlu mengganti ini dengan data aktual Anda
    const hiddenAlbumsData = {
        album1: {
            title: "Coming Soon Album",
            images: [
                "images/album1/img1.jpg",
                "images/album1/img2.jpg"
            ]
        },
        album2: {
            title: "Kenangan 27 Mei 2025",
            images: [
                "img/album 2/1.jpg",
                "img/album 2/2.jpg",
                "img/album 2/3.jpg",
                "img/album 2/4.jpg",
                "img/album 2/5.jpg"
            ]
        },
        album3: {
            title: "Kenangan 22 Mei 2025",
            images: [
                "img/album 3/1.jpg",
                "img/album 3/2.jpg",
                "img/album 3/3.jpg",   
                "img/album 3/4.jpg",
                "img/album 3/5.jpg",
                "img/album 3/6.jpg",
                "img/album 3/7.jpg",
                "img/album 3/8.jpg",
                "img/album 3/9.jpg",
                "img/album 3/10.jpg",
                "img/album 3/11.jpg",
                "img/album 3/12.jpg",
                "img/album 3/13.jpg",
                "img/album 3/14.jpg",
                "img/album 3/15.jpg",
                "img/album 3/16.jpg",
            ]
        },
        album4: {
            title: "Kenangan 5 Mei 2025",
            images: [
                "img/album 4/1.jpg",
                "img/album 4/2.jpg",
                "img/album 4/3.jpg",
                "img/album 4/4.jpg",
                "img/album 4/5.jpg",
                "img/album 4/6.jpg",
                "img/album 4/7.jpg",
                "img/album 4/8.jpg",
            ]
        },
        album5: {
            title: "Kenangan 8 April 2025",
            images: [
                "img/album 5/1.jpg",
                "img/album 5/2.jpg",
                "img/album 5/3.jpg"
            ]
        },
        album6: {
            title: "Kenangan 16 Maret 2025",
            images: [
                "img/album 6/1.jpg",
                "img/album 6/2.jpg",
                "img/album 6/3.jpg",
                "img/album 6/4.jpg",
                "img/album 6/5.jpg"
            ]
        },
        album7: {
            title: "Kenangan 6 Maret 2025",
            images: [
                "img/album 7/1.jpg",
                "img/album 7/2.jpg",
                "img/album 7/3.jpg",
                "img/album 7/4.jpg",
                "img/album 7/5.jpg",
                "img/album 7/6.jpg",
                "img/album 7/7.jpg",
                "img/album 7/8.jpg"
            ]
        },
        album8: {
            title: "Kenangan 17 Februari 2025",
            images: [
                "img/album 8/1.jpg",
                "img/album 8/2.jpg",
                "img/album 8/3.jpg",
                "img/album 8/4.jpg",
                "img/album 8/5.jpg",
                "img/album 8/6.jpg",
                "img/album 8/7.jpg",
                "img/album 8/8.jpg",
                "img/album 8/9.jpg",
                "img/album 8/10.jpg"
            ]
        },
        album9: {
            title: "Kenangan 26 Januari 2025",
            images: [
                "img/album 9/1.jpg",
                "img/album 9/2.jpg",
                "img/album 9/3.jpg",
                "img/album 9/4.jpg",
                "img/album 9/5.jpg"
            ]
        },
        album10: {
            title: "Kenangan 5 Januari 2025",
            images: [
                "img/album 10/1.jpg",
                "img/album 10/2.jpg",
                "img/album 10/3.jpg",
                "img/album 10/4.jpg",
                "img/album 10/5.jpg",
                "img/album 10/6.jpg",
                "img/album 10/7.jpg",
                "img/album 10/8.jpg",
                "img/album 10/9.jpg",
                "img/album 10/10.jpg",
                "img/album 10/11.jpg",
                "img/album 10/12.jpg"
            ]
        },
        album11: {
            title: "Kenangan 14 Desember 2024",
            images: [
                "img/album 11/1.jpg",
                "img/album 11/2.jpg",
                "img/album 11/3.jpg",
                "img/album 11/4.jpg",
                "img/album 11/5.jpg",
                "img/album 11/6.jpg",
                "img/album 11/7.jpg",
                "img/album 11/8.jpg",
                "img/album 11/9.jpg",
                "img/album 11/10.jpg",
                "img/album 11/11.jpg",
                "img/album 11/12.jpg",
                "img/album 11/13.jpg"
            ]
        },
        album12: {
            title: "Kenangan 30 November 2024",
            images: [
                "img/album 12/1.jpg",
                "img/album 12/2.jpg",
                "img/album 12/3.jpg",
                "img/album 12/4.jpg",
                "img/album 12/5.jpg",
                "img/album 12/6.jpg",
                "img/album 12/7.jpg",
                "img/album 12/8.jpg",
                "img/album 12/9.jpg",
                "img/album 12/10.jpg",
                "img/album 12/11.jpg",
                "img/album 12/12.jpg",
                "img/album 12/13.jpg",
                "img/album 12/14.jpg", 
                "img/album 12/15.jpg",
                "img/album 12/16.jpg",
                "img/album 12/17.jpg",
                "img/album 12/18.jpg",
                "img/album 12/19.jpg",
                "img/album 12/20.jpg",
                "img/album 12/21.jpg",
                "img/album 12/22.jpg"
            ]
        },
        album13: {
            title: "Kenangan 24 November 2024",
            images: [
                "img/album 13/1.jpg"
            ]
        },
        album14: {
            title: "Kenangan 26 Oktober 2024",
            images: [
                "img/album 14/1.jpg",
                "img/album 14/2.jpg",
                "img/album 14/3.jpg",
                "img/album 14/4.jpg",
                "img/album 14/5.jpg",
                "img/album 14/6.jpg",
                "img/album 14/7.jpg",
                "img/album 14/8.jpg",
                "img/album 14/9.jpg",
                "img/album 14/10.jpg",
                "img/album 14/11.jpg",
                "img/album 14/12.jpg"
            ]
        },
        album15: {
            title: "Kenangan 30 November 2024",
            images: [
                "img/album 15/1.jpg",
                "img/album 15/2.jpg",
                "img/album 15/3.jpg"
            ]
        },
        album16: {
            title: "Kenangan 7 Oktober 2024",
            images: [
                "img/album 16/1.jpg",
                "img/album 16/2.jpg",
                "img/album 16/3.jpg",
                "img/album 16/4.jpg",
                "img/album 16/5.jpg",
                "img/album 16/6.jpg",
                "img/album 16/7.jpg",
                "img/album 16/8.jpg",
                "img/album 16/9.jpg",
                "img/album 16/10.jpg",
                "img/album 16/11.jpg",
                "img/album 16/12.jpg",
                "img/album 16/13.jpg",
                "img/album 16/14.jpg",
                "img/album 16/15.jpg",
                "img/album 16/16.jpg",
                "img/album 16/17.jpg",
                "img/album 16/18.jpg",
                "img/album 16/19.jpg",
                "img/album 16/20.jpg",
                "img/album 16/21.jpg",
                "img/album 16/22.jpg",
                "img/album 16/23.jpg",
                "img/album 16/24.jpg",
                "img/album 16/25.jpg",
                "img/album 16/26.jpg",
                "img/album 16/27.jpg",
                "img/album 16/28.jpg",
                "img/album 16/29.jpg",
                "img/album 16/30.jpg",
                "img/album 16/31.jpg",
                "img/album 16/32.jpg"
            ]
        },
        album17: {
            title: "Kenangan 4 Oktober 2024",
            images: [
                "img/album 17/1.jpg",
                "img/album 17/2.jpg",
                "img/album 17/3.jpg",
                "img/album 17/4.jpg",
                "img/album 17/5.jpg",
                "img/album 17/6.jpg"
            ]
        },
        album18: {
            title: "Kenangan 27 September 2024",
            images: [
                "img/album 18/1.jpg",
                "img/album 18/2.jpg",
                "img/album 18/3.jpg",
                "img/album 18/4.jpg",
                "img/album 18/5.jpg",
                "img/album 18/6.jpg"
            ]
        },
        album19: {
            title: "Kenangan 9 September 2024",
            images: [
                "img/album 19/1.jpg",
                "img/album 19/2.jpg",
                "img/album 19/3.jpg",
                "img/album 19/4.jpg",
                "img/album 19/5.jpg"
            ]
        },
        album20: {
            title: "Kenangan 9 Agustus 2024",
            images: [
                "img/album 20/1.jpg",
                "img/album 20/2.jpg",
                "img/album 20/3.jpg",
                "img/album 20/4.jpg",
                "img/album 20/5.jpg"
            ]
        },
        album21: {
            title: "Kenangan 4 Agustus 2024",
            images: [
                "img/album 21/1.jpg",
                "img/album 21/2.jpg",
                "img/album 21/3.jpg",
                "img/album 21/4.jpg",
                "img/album 21/5.jpg",
                "img/album 21/6.jpg",
                "img/album 21/7.jpg",
                "img/album 21/8.jpg",
                "img/album 21/9.jpg",
                "img/album 21/10.jpg",
                "img/album 21/11.jpg",
                "img/album 21/12.jpg",
                "img/album 21/13.jpg",
                "img/album 21/14.jpg",
                "img/album 21/15.jpg",
                "img/album 21/16.jpg",
                "img/album 21/17.jpg"
            ]
        },
        album22: {
            title: "Kenangan 30 Mei 2024",
            images: [
                "img/album 22/1.jpg",
                "img/album 22/2.jpg",
                "img/album 22/3.jpg",
                "img/album 22/4.jpg",
                "img/album 22/5.jpg",
                "img/album 22/6.jpg",
                "img/album 22/7.jpg",
                "img/album 22/8.jpg",
                "img/album 22/9.jpg",
                "img/album 22/10.jpg"
            ]
        },
        album23: {
            title: "Kenangan 19 Oktober 2024",
            images: [
                "img/album 23/1.jpg"
            ]
        }
        // Tambahkan data untuk album6 sampai album20
        // Contoh:
        // album6: {
        //     title: "Album Rahasia 6",
        //     images: [
        //         "images/album6/pic1.jpg",
        //         "images/album6/pic2.jpg"
        //     ]
        // }
    };

    albumFolders.forEach(folder => {
        folder.addEventListener('click', () => {
            const albumId = folder.dataset.albumId; // Ambil ID album dari data-attribute
            const albumData = hiddenAlbumsData[albumId];

            if (albumData) {
                modalAlbumTitle.textContent = albumData.title;
                modalAlbumImages.innerHTML = ''; // Kosongkan gambar sebelumnya

                albumData.images.forEach(imageSrc => {
                    const img = document.createElement('img');
                    img.src = imageSrc;
                    modalAlbumImages.appendChild(img);
                });

                modal.style.display = 'flex'; // Tampilkan modal
            } else {
                alert('Album tidak ditemukan!'); // Atau penanganan error lainnya
            }
        });
    });

    // Menutup modal saat tombol close diklik
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Menutup modal saat mengklik di luar area modal content
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });


    // --- Music Player Logic ---
    const songSelect = document.getElementById('songSelect');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const audio = new Audio(); // Membuat elemen Audio HTML5

    let isPlaying = false;

    // Fungsi untuk memuat dan memutar lagu
    function loadAndPlaySong(songPath) {
        audio.src = songPath;
        audio.play();
        isPlaying = true;
        playPauseBtn.textContent = '⏸️'; // Ubah simbol menjadi pause
    }

    // Event listener untuk tombol Play/Pause
    playPauseBtn.addEventListener('click', function() {
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
            playPauseBtn.textContent = '▶️'; // Ubah simbol menjadi play
        } else {
            // Jika belum ada lagu yang dimuat, muat lagu yang terpilih
            if (!audio.src || audio.paused) { // Check if src is empty or paused
                loadAndPlaySong(songSelect.value);
            } else { // Jika sudah ada src tapi dipause, play saja
                audio.play();
            }
            isPlaying = true;
            playPauseBtn.textContent = '⏸️';
        }
    });

    // Event listener saat pilihan lagu berubah
    songSelect.addEventListener('change', function() {
        loadAndPlaySong(this.value); // Muat dan putar lagu baru
    });

    // Opsional: Event listener saat lagu selesai diputar
    audio.addEventListener('ended', function() {
        isPlaying = false;
        playPauseBtn.textContent = '▶️'; // Kembali ke simbol play
        // Opsional: putar lagu selanjutnya secara otomatis
        // currentSongIndex = (currentSongIndex + 1) % songs.length;
        // loadAndPlaySong(songs[currentSongIndex].path);
    });

    // Muat lagu pertama secara default saat halaman dimuat (opsional, bisa dihapus)
    // loadAndPlaySong(songSelect.value);
    //  Penutup dari DOMContentLoaded





});

