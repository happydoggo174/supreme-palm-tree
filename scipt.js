<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recipe Post - Hungry Ship</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
    
    <style>
        :root {
            --primary-color: #2d1b0f;
            --accent-warm: #d4a574;
            --accent-rust: #b85c38;
            --cream: #faf8f3;
            --sage: #9ca986;
            --text-dark: #3a2a1f;
            --text-light: #6b5d52;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Crimson Text', serif;
            color: var(--text-dark);
            background: var(--cream);
            line-height: 1.8;
            font-size: 19px;
        }
        
        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes float {
            0%, 100% {
                transform: translateY(0px);
            }
            50% {
                transform: translateY(-10px);
            }
        }
        
        @keyframes wave {
            0%, 100% {
                transform: translateX(0) rotate(0deg);
            }
            25% {
                transform: translateX(-3px) rotate(-1deg);
            }
            75% {
                transform: translateX(3px) rotate(1deg);
            }
        }
        
        /* Header Styles */
        .site-header {
            background: linear-gradient(135deg, var(--primary-color) 0%, #422815 100%);
            padding: 2rem 0;
            border-bottom: 3px solid var(--accent-warm);
            position: relative;
            overflow: hidden;
        }
        
        .site-header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
                radial-gradient(circle at 20% 50%, rgba(212, 165, 116, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(184, 92, 56, 0.1) 0%, transparent 50%);
            pointer-events: none;
        }
        
        .site-title {
            font-family: 'Playfair Display', serif;
            font-weight: 900;
            font-size: 3rem;
            color: var(--cream);
            letter-spacing: -2px;
            margin: 0;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            text-decoration: none;
            display: inline-block;
            transition: color 0.3s ease;
        }
        
        .site-title:hover {
            color: var(--accent-warm);
        }
        
        /* Navigation */
        .main-nav {
            background: rgba(250, 248, 243, 0.95);
            backdrop-filter: blur(10px);
            padding: 1rem 0;
            border-bottom: 1px solid rgba(212, 165, 116, 0.3);
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(45, 27, 15, 0.1);
        }
        
        .nav-link {
            font-family: 'Playfair Display', serif;
            font-size: 1.1rem;
            color: var(--text-dark);
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            padding: 0.5rem 1.5rem !important;
            transition: all 0.3s ease;
            position: relative;
        }
        
        .nav-link::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 2px;
            background: var(--accent-rust);
            transition: all 0.3s ease;
            transform: translateX(-50%);
        }
        
        .nav-link:hover {
            color: var(--accent-rust);
        }
        
        .nav-link:hover::after {
            width: 70%;
        }
        
        /* Post Header */
        .post-header {
            text-align: center;
            padding: 4rem 0 2rem;
            max-width: 900px;
            margin: 0 auto;
        }
        
        .post-category {
            font-family: 'Playfair Display', serif;
            font-size: 1rem;
            color: var(--accent-rust);
            text-transform: uppercase;
            letter-spacing: 3px;
            font-weight: 600;
            margin-bottom: 1rem;
            display: inline-block;
        }
        
        .post-title {
            font-family: 'Playfair Display', serif;
            font-size: 4rem;
            font-weight: 900;
            color: var(--primary-color);
            line-height: 1.2;
            margin-bottom: 1.5rem;
            letter-spacing: -1px;
        }
        
        .post-meta {
            display: flex;
            justify-content: center;
            gap: 2rem;
            font-size: 1.1rem;
            color: var(--text-light);
            margin-bottom: 2rem;
            flex-wrap: wrap;
        }
        
        .meta-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .meta-icon {
            color: var(--accent-warm);
            font-weight: 600;
        }
        
        /* Featured Image with Ship */
        .featured-image-container {
            position: relative;
            max-width: 1200px;
            margin: 0 auto 4rem;
            animation: float 4s ease-in-out infinite;
        }
        
        .featured-image-container::before {
            content: '⛵';
            position: absolute;
            top: -40px;
            right: 40px;
            font-size: 3rem;
            animation: wave 2.5s ease-in-out infinite;
            z-index: 10;
            filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.2));
        }
        
        .featured-image-container::after {
            content: '';
            position: absolute;
            bottom: -20px;
            left: 5%;
            right: 5%;
            height: 20px;
            background: linear-gradient(90deg, 
                transparent 0%, 
                rgba(156, 169, 134, 0.3) 20%, 
                rgba(156, 169, 134, 0.6) 50%, 
                rgba(156, 169, 134, 0.3) 80%, 
                transparent 100%);
            border-radius: 50%;
            animation: wave 3s ease-in-out infinite;
        }
        
        .featured-image {
            width: 100%;
            height: 500px;
            object-fit: cover;
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(45, 27, 15, 0.2);
        }
        
        /* Post Content */
        .post-content {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 1rem;
        }
        
        .post-content h2 {
            font-family: 'Playfair Display', serif;
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--primary-color);
            margin: 3rem 0 1.5rem;
            position: relative;
            padding-bottom: 1rem;
        }
        
        .post-content h2::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 80px;
            height: 3px;
            background: var(--accent-rust);
        }
        
        .post-content h3 {
            font-family: 'Playfair Display', serif;
            font-size: 1.8rem;
            font-weight: 600;
            color: var(--text-dark);
            margin: 2rem 0 1rem;
        }
        
        .post-content p {
            margin-bottom: 1.5rem;
            color: var(--text-dark);
        }
        
        .post-content ul, .post-content ol {
            margin-bottom: 1.5rem;
            padding-left: 2rem;
        }
        
        .post-content li {
            margin-bottom: 0.5rem;
        }
        
        /* Ingredients/Instructions Sections */
        .recipe-section {
            background: white;
            padding: 2.5rem;
            border-radius: 12px;
            margin: 3rem 0;
            box-shadow: 0 4px 20px rgba(45, 27, 15, 0.08);
            border-left: 4px solid var(--accent-rust);
        }
        
        .recipe-section h3 {
            font-family: 'Playfair Display', serif;
            font-size: 2rem;
            font-weight: 700;
            color: var(--primary-color);
            margin-top: 0;
            margin-bottom: 1.5rem;
        }
        
        .ingredients-list {
            list-style: none;
            padding: 0;
        }
        
        .ingredients-list li {
            padding: 0.75rem 0;
            border-bottom: 1px solid rgba(212, 165, 116, 0.2);
            display: flex;
            align-items: center;
        }
        
        .ingredients-list li:last-child {
            border-bottom: none;
        }
        
        .ingredients-list li::before {
            content: '⚓';
            color: var(--accent-warm);
            font-size: 1.2rem;
            margin-right: 1rem;
            flex-shrink: 0;
        }
        
        .instructions-list {
            counter-reset: step-counter;
            list-style: none;
            padding: 0;
        }
        
        .instructions-list li {
            counter-increment: step-counter;
            position: relative;
            padding-left: 4rem;
            margin-bottom: 2rem;
        }
        
        .instructions-list li::before {
            content: counter(step-counter);
            position: absolute;
            left: 0;
            top: 0;
            background: var(--accent-rust);
            color: white;
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Playfair Display', serif;
            font-weight: 700;
            font-size: 1.1rem;
        }
        
        /* Nutrition Info */
        .nutrition-info {
            background: linear-gradient(135deg, rgba(212, 165, 116, 0.1) 0%, rgba(156, 169, 134, 0.1) 100%);
            padding: 2rem;
            border-radius: 12px;
            margin: 3rem 0;
        }
        
        .nutrition-title {
            font-family: 'Playfair Display', serif;
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 1rem;
        }
        
        .nutrition-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 1rem;
        }
        
        .nutrition-item {
            background: white;
            padding: 1rem;
            border-radius: 8px;
            text-align: center;
            box-shadow: 0 2px 10px rgba(45, 27, 15, 0.05);
        }
        
        .nutrition-value {
            font-family: 'Playfair Display', serif;
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--accent-rust);
            display: block;
        }
        
        .nutrition-label {
            font-size: 0.9rem;
            color: var(--text-light);
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        /* Notes Section */
        .notes-section {
            background: #fff9f0;
            border-left: 4px solid var(--accent-warm);
            padding: 2rem;
            border-radius: 8px;
            margin: 3rem 0;
        }
        
        .notes-title {
            font-family: 'Playfair Display', serif;
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 1rem;
        }
        
        /* Related Recipes */
        .related-section {
            background: linear-gradient(135deg, rgba(212, 165, 116, 0.05) 0%, rgba(156, 169, 134, 0.05) 100%);
            padding: 4rem 0;
            margin-top: 4rem;
            border-top: 2px solid var(--accent-warm);
        }
        
        .section-title {
            font-family: 'Playfair Display', serif;
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--primary-color);
            text-align: center;
            margin-bottom: 3rem;
            position: relative;
        }
        
        .section-title::after {
            content: '';
            display: block;
            width: 80px;
            height: 3px;
            background: var(--accent-rust);
            margin: 1rem auto 0;
        }
        
        .related-card {
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(45, 27, 15, 0.1);
            transition: all 0.4s ease;
            height: 100%;
            border: 1px solid rgba(212, 165, 116, 0.2);
        }
        
        .related-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 30px rgba(45, 27, 15, 0.2);
        }
        
        .related-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            transition: transform 0.4s ease;
        }
        
        .related-card:hover .related-image {
            transform: scale(1.05);
        }
        
        .related-content {
            padding: 1.5rem;
        }
        
        .related-title {
            font-family: 'Playfair Display', serif;
            font-size: 1.4rem;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 0.5rem;
            line-height: 1.3;
        }
        
        .related-category {
            font-size: 0.85rem;
            color: var(--accent-rust);
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 600;
        }
        
        /* Comments Section */
        .comments-section {
            max-width: 800px;
            margin: 4rem auto;
            padding: 0 1rem;
        }
        
        .comments-title {
            font-family: 'Playfair Display', serif;
            font-size: 2rem;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 2rem;
        }
        
        .comment {
            background: white;
            padding: 1.5rem;
            border-radius: 8px;
            margin-bottom: 1.5rem;
            box-shadow: 0 2px 10px rgba(45, 27, 15, 0.05);
        }
        
        .comment-author {
            font-family: 'Playfair Display', serif;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 0.5rem;
        }
        
        .comment-date {
            font-size: 0.9rem;
            color: var(--text-light);
            margin-bottom: 1rem;
        }
        
        /* Footer */
        .site-footer {
            background: var(--text-dark);
            color: var(--cream);
            padding: 3rem 0 1.5rem;
            margin-top: 4rem;
        }
        
        .footer-links {
            list-style: none;
            display: flex;
            gap: 2rem;
            justify-content: center;
            margin-bottom: 2rem;
        }
        
        .footer-links a {
            color: var(--cream);
            text-decoration: none;
            font-family: 'Playfair Display', serif;
            transition: color 0.3s ease;
        }
        
        .footer-links a:hover {
            color: var(--accent-warm);
        }
        
        .copyright {
            text-align: center;
            font-size: 0.9rem;
            color: var(--text-light);
            padding-top: 2rem;
            border-top: 1px solid rgba(212, 165, 116, 0.2);
        }
        
        /* Print Recipe Button */
        .action-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin: 3rem 0;
            flex-wrap: wrap;
        }
        
        .btn-action {
            background: var(--accent-rust);
            color: white;
            border: none;
            padding: 1rem 2.5rem;
            font-family: 'Playfair Display', serif;
            font-size: 1rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-radius: 6px;
            transition: all 0.3s ease;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
        }
        
        .btn-action:hover {
            background: var(--primary-color);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(184, 92, 56, 0.3);
            color: white;
        }
        
        .btn-secondary {
            background: var(--accent-warm);
        }
        
        .btn-secondary:hover {
            background: var(--sage);
        }
        
        /* Responsive */
        @media (max-width: 768px) {
            .post-title {
                font-size: 2.5rem;
            }
            
            .featured-image {
                height: 300px;
            }
            
            .post-content h2 {
                font-size: 2rem;
            }
            
            .nutrition-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="site-header">
        <div class="container text-center">
            <a href="index.html" class="site-title">Hungry Ship</a>
        </div>
    </header>

    <!-- Navigation -->
    <nav class="main-nav">
        <div class="container">
            <ul class="nav justify-content-center">
                <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#recipes">Recipes</a></li>
                <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- Post Header -->
    <article class="container">
        <div class="post-header">
            <span class="post-category" id="postCategory">Desserts</span>
            <h1 class="post-title" id="postTitle">Decadent Chocolate Cake</h1>
            <div class="post-meta">
                <span class="meta-item"><span class="meta-icon">👤</span> <span id="postAuthor">Chef Maria</span></span>
                <span class="meta-item"><span class="meta-icon">📅</span> <span id="postDate">February 3, 2026</span></span>
                <span class="meta-item"><span class="meta-icon">⏱</span> <span id="postTime">60 min</span></span>
                <span class="meta-item"><span class="meta-icon">👥</span> <span id="postServings">8 servings</span></span>
            </div>
        </div>

        <!-- Featured Image -->
        <div class="featured-image-container">
            <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&auto=format&fit=crop" alt="Decadent Chocolate Cake" class="featured-image" id="featuredImage">
        </div>

        <!-- Action Buttons -->
        <div class="action-buttons">
            <button class="btn-action" onclick="printRecipe()">🖨 Print Recipe</button>
            <button class="btn-action btn-secondary" onclick="saveRecipe()">❤️ Save Recipe</button>
            <button class="btn-action btn-secondary" onclick="shareRecipe()">📤 Share</button>
        </div>

        <!-- Post Introduction -->
        <div class="post-content">
            <p id="postIntro">
                There's something magical about a perfectly baked chocolate cake. This recipe combines rich cocoa with silky ganache to create layers of pure indulgence. Whether you're celebrating a special occasion or simply treating yourself, this cake promises to deliver deep chocolate flavor in every bite.
            </p>

            <!-- Ingredients -->
            <div class="recipe-section">
                <h3>⚓ Ingredients</h3>
                <ul class="ingredients-list" id="ingredientsList">
                    <li>2 cups all-purpose flour</li>
                    <li>2 cups granulated sugar</li>
                    <li>3/4 cup unsweetened cocoa powder</li>
                    <li>2 teaspoons baking soda</li>
                    <li>1 teaspoon baking powder</li>
                    <li>1 teaspoon salt</li>
                    <li>2 large eggs</li>
                    <li>1 cup buttermilk</li>
                    <li>1 cup strong brewed coffee (cooled)</li>
                    <li>1/2 cup vegetable oil</li>
                    <li>2 teaspoons vanilla extract</li>
                </ul>
                
                <h4 style="margin-top: 2rem;">For the Ganache:</h4>
                <ul class="ingredients-list">
                    <li>2 cups heavy cream</li>
                    <li>16 oz semi-sweet chocolate chips</li>
                    <li>2 tablespoons butter</li>
                </ul>
            </div>

            <!-- Instructions -->
            <div class="recipe-section">
                <h3>🧭 Instructions</h3>
                <ol class="instructions-list" id="instructionsList">
                    <li>Preheat your oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.</li>
                    <li>In a large bowl, whisk together flour, sugar, cocoa powder, baking soda, baking powder, and salt.</li>
                    <li>In a separate bowl, beat eggs, then add buttermilk, coffee, oil, and vanilla extract. Mix until well combined.</li>
                    <li>Gradually add the wet ingredients to the dry ingredients, mixing until just combined. The batter will be thin.</li>
                    <li>Divide the batter evenly between the prepared pans.</li>
                    <li>Bake for 30-35 minutes, or until a toothpick inserted in the center comes out clean.</li>
                    <li>Allow cakes to cool in pans for 10 minutes, then turn out onto wire racks to cool completely.</li>
                    <li>For the ganache, heat cream in a saucepan until it just begins to simmer. Remove from heat and add chocolate chips and butter. Stir until smooth and glossy.</li>
                    <li>Let ganache cool to spreading consistency (about 15-20 minutes).</li>
                    <li>Place one cake layer on a serving plate. Spread with ganache. Top with second layer and cover entire cake with remaining ganache.</li>
                    <li>Refrigerate for at least 30 minutes before serving to set the ganache.</li>
                </ol>
            </div>

            <!-- Nutrition Info -->
            <div class="nutrition-info">
                <h4 class="nutrition-title">Nutrition Information (per serving)</h4>
                <div class="nutrition-grid" id="nutritionInfo">
                    <div class="nutrition-item">
                        <span class="nutrition-value">520</span>
                        <span class="nutrition-label">Calories</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-value">28g</span>
                        <span class="nutrition-label">Fat</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-value">65g</span>
                        <span class="nutrition-label">Carbs</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-value">7g</span>
                        <span class="nutrition-label">Protein</span>
                    </div>
                </div>
            </div>

            <!-- Chef's Notes -->
            <div class="notes-section">
                <h4 class="notes-title">Chef's Notes</h4>
                <p id="chefNotes">
                    The secret to this ultra-moist cake is the coffee! Don't worry—it won't taste like coffee. The coffee enhances the chocolate flavor and adds moisture. For an extra special touch, you can add a tablespoon of espresso powder to the ganache. This cake can be made a day ahead and keeps well in the refrigerator for up to 5 days.
                </p>
            </div>
        </div>
    </article>

    <!-- Related Recipes -->
    <section class="related-section">
        <div class="container">
            <h2 class="section-title">More Recipes You'll Love</h2>
            <div class="row" id="relatedRecipes">
                <!-- Related recipe cards will be populated here -->
                <div class="col-md-4 mb-4">
                    <a href="#" class="text-decoration-none">
                        <div class="related-card">
                            <img src="https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=600&auto=format&fit=crop" alt="Tiramisu" class="related-image">
                            <div class="related-content">
                                <span class="related-category">Desserts</span>
                                <h3 class="related-title">Classic Tiramisu</h3>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-md-4 mb-4">
                    <a href="#" class="text-decoration-none">
                        <div class="related-card">
                            <img src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&auto=format&fit=crop" alt="Chocolate Chip Cookies" class="related-image">
                            <div class="related-content">
                                <span class="related-category">Desserts</span>
                                <h3 class="related-title">Perfect Chocolate Chip Cookies</h3>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-md-4 mb-4">
                    <a href="#" class="text-decoration-none">
                        <div class="related-card">
                            <img src="https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&auto=format&fit=crop" alt="Brownie" class="related-image">
                            <div class="related-content">
                                <span class="related-category">Desserts</span>
                                <h3 class="related-title">Fudgy Brownies</h3>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Comments Section -->
    <section class="comments-section">
        <h3 class="comments-title">Comments</h3>
        <div id="commentsContainer">
            <!-- Comments will be loaded here -->
            <div class="comment">
                <div class="comment-author">Sarah J.</div>
                <div class="comment-date">January 28, 2026</div>
                <p>This cake is absolutely divine! Made it for my daughter's birthday and everyone asked for the recipe. The ganache is so smooth and rich!</p>
            </div>
            <div class="comment">
                <div class="comment-author">Mike R.</div>
                <div class="comment-date">January 25, 2026</div>
                <p>Best chocolate cake I've ever made. The coffee really does make a difference. Will be making this again for sure!</p>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="site-footer">
        <div class="container">
            <ul class="footer-links">
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Use</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#advertise">Advertise</a></li>
            </ul>
            <p class="copyright">&copy; 2026 Hungry Ship. All rights reserved.</p>
        </div>
    </footer>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    
    <!-- Custom JavaScript for API Integration -->
    <script>
        // Get recipe ID from URL parameter
        const urlParams = new URLSearchParams(window.location.search);
        const recipeId = urlParams.get('id');
        
        // API endpoint - replace with your actual endpoint
        const API_ENDPOINT = 'https://your-api-endpoint.com/recipes';
        
        // Load recipe data on page load
        document.addEventListener('DOMContentLoaded', () => {
            if (recipeId) {
                loadRecipe(recipeId);
            }
        });
        
        // Function to load recipe from API
        async function loadRecipe(id) {
            try {
                const response = await fetch(`${API_ENDPOINT}/${id}`);
                const recipe = await response.json();
                
                // Populate the page with recipe data
                populateRecipe(recipe);
                
                // Load related recipes
                loadRelatedRecipes(recipe.category);
                
            } catch (error) {
                console.error('Error loading recipe:', error);
            }
        }
        
        // Function to populate recipe data
        function populateRecipe(recipe) {
            // Update page title
            document.title = `${recipe.title} - Hungry Ship`;
            
            // Update header info
            document.getElementById('postCategory').textContent = recipe.category;
            document.getElementById('postTitle').textContent = recipe.title;
            document.getElementById('postAuthor').textContent = recipe.author;
            document.getElementById('postDate').textContent = recipe.date;
            document.getElementById('postTime').textContent = recipe.cookTime;
            document.getElementById('postServings').textContent = recipe.servings + ' servings';
            
            // Update featured image
            document.getElementById('featuredImage').src = recipe.image;
            document.getElementById('featuredImage').alt = recipe.title;
            
            // Update introduction
            document.getElementById('postIntro').textContent = recipe.introduction;
            
            // Update ingredients
            if (recipe.ingredients) {
                const ingredientsList = document.getElementById('ingredientsList');
                ingredientsList.innerHTML = '';
                recipe.ingredients.forEach(ingredient => {
                    const li = document.createElement('li');
                    li.textContent = ingredient;
                    ingredientsList.appendChild(li);
                });
            }
            
            // Update instructions
            if (recipe.instructions) {
                const instructionsList = document.getElementById('instructionsList');
                instructionsList.innerHTML = '';
                recipe.instructions.forEach(instruction => {
                    const li = document.createElement('li');
                    li.textContent = instruction;
                    instructionsList.appendChild(li);
                });
            }
            
            // Update nutrition info
            if (recipe.nutrition) {
                const nutritionInfo = document.getElementById('nutritionInfo');
                nutritionInfo.innerHTML = `
                    <div class="nutrition-item">
                        <span class="nutrition-value">${recipe.nutrition.calories}</span>
                        <span class="nutrition-label">Calories</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-value">${recipe.nutrition.fat}</span>
                        <span class="nutrition-label">Fat</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-value">${recipe.nutrition.carbs}</span>
                        <span class="nutrition-label">Carbs</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-value">${recipe.nutrition.protein}</span>
                        <span class="nutrition-label">Protein</span>
                    </div>
                `;
            }
            
            // Update chef's notes
            if (recipe.notes) {
                document.getElementById('chefNotes').textContent = recipe.notes;
            }
        }
        
        // Function to load related recipes
        async function loadRelatedRecipes(category) {
            try {
                const response = await fetch(`${API_ENDPOINT}?category=${category}&limit=3`);
                const recipes = await response.json();
                
                const container = document.getElementById('relatedRecipes');
                container.innerHTML = '';
                
                recipes.forEach(recipe => {
                    const card = `
                        <div class="col-md-4 mb-4">
                            <a href="recipe.html?id=${recipe.id}" class="text-decoration-none">
                                <div class="related-card">
                                    <img src="${recipe.image}" alt="${recipe.title}" class="related-image">
                                    <div class="related-content">
                                        <span class="related-category">${recipe.category}</span>
                                        <h3 class="related-title">${recipe.title}</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `;
                    container.innerHTML += card;
                });
            } catch (error) {
                console.error('Error loading related recipes:', error);
            }
        }
        
        // Print recipe function
        function printRecipe() {
            window.print();
        }
        
        // Save recipe function
        function saveRecipe() {
            // Implement save to favorites functionality
            console.log('Saving recipe...');
            alert('Recipe saved to your favorites!');
        }
        
        // Share recipe function
        function shareRecipe() {
            if (navigator.share) {
                navigator.share({
                    title: document.getElementById('postTitle').textContent,
                    text: 'Check out this recipe from Hungry Ship!',
                    url: window.location.href
                }).catch(err => console.log('Error sharing:', err));
            } else {
                // Fallback - copy link to clipboard
                navigator.clipboard.writeText(window.location.href);
                alert('Recipe link copied to clipboard!');
            }
        }
    </script>
</body>
</html><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recipe Post - Hungry Ship</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
    
    <style>
        :root {
            --primary-color: #2d1b0f;
            --accent-warm: #d4a574;
            --accent-rust: #b85c38;
            --cream: #faf8f3;
            --sage: #9ca986;
            --text-dark: #3a2a1f;
            --text-light: #6b5d52;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Crimson Text', serif;
            color: var(--text-dark);
            background: var(--cream);
            line-height: 1.8;
            font-size: 19px;
        }
        
        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes float {
            0%, 100% {
                transform: translateY(0px);
            }
            50% {
                transform: translateY(-10px);
            }
        }
        
        @keyframes wave {
            0%, 100% {
                transform: translateX(0) rotate(0deg);
            }
            25% {
                transform: translateX(-3px) rotate(-1deg);
            }
            75% {
                transform: translateX(3px) rotate(1deg);
            }
        }
        
        /* Header Styles */
        .site-header {
            background: linear-gradient(135deg, var(--primary-color) 0%, #422815 100%);
            padding: 2rem 0;
            border-bottom: 3px solid var(--accent-warm);
            position: relative;
            overflow: hidden;
        }
        
        .site-header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
                radial-gradient(circle at 20% 50%, rgba(212, 165, 116, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(184, 92, 56, 0.1) 0%, transparent 50%);
            pointer-events: none;
        }
        
        .site-title {
            font-family: 'Playfair Display', serif;
            font-weight: 900;
            font-size: 3rem;
            color: var(--cream);
            letter-spacing: -2px;
            margin: 0;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            text-decoration: none;
            display: inline-block;
            transition: color 0.3s ease;
        }
        
        .site-title:hover {
            color: var(--accent-warm);
        }
        
        /* Navigation */
        .main-nav {
            background: rgba(250, 248, 243, 0.95);
            backdrop-filter: blur(10px);
            padding: 1rem 0;
            border-bottom: 1px solid rgba(212, 165, 116, 0.3);
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(45, 27, 15, 0.1);
        }
        
        .nav-link {
            font-family: 'Playfair Display', serif;
            font-size: 1.1rem;
            color: var(--text-dark);
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            padding: 0.5rem 1.5rem !important;
            transition: all 0.3s ease;
            position: relative;
        }
        
        .nav-link::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 2px;
            background: var(--accent-rust);
            transition: all 0.3s ease;
            transform: translateX(-50%);
        }
        
        .nav-link:hover {
            color: var(--accent-rust);
        }
        
        .nav-link:hover::after {
            width: 70%;
        }
        
        /* Post Header */
        .post-header {
            text-align: center;
            padding: 4rem 0 2rem;
            max-width: 900px;
            margin: 0 auto;
        }
        
        .post-category {
            font-family: 'Playfair Display', serif;
            font-size: 1rem;
            color: var(--accent-rust);
            text-transform: uppercase;
            letter-spacing: 3px;
            font-weight: 600;
            margin-bottom: 1rem;
            display: inline-block;
        }
        
        .post-title {
            font-family: 'Playfair Display', serif;
            font-size: 4rem;
            font-weight: 900;
            color: var(--primary-color);
            line-height: 1.2;
            margin-bottom: 1.5rem;
            letter-spacing: -1px;
        }
        
        .post-meta {
            display: flex;
            justify-content: center;
            gap: 2rem;
            font-size: 1.1rem;
            color: var(--text-light);
            margin-bottom: 2rem;
            flex-wrap: wrap;
        }
        
        .meta-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .meta-icon {
            color: var(--accent-warm);
            font-weight: 600;
        }
        
        /* Featured Image with Ship */
        .featured-image-container {
            position: relative;
            max-width: 1200px;
            margin: 0 auto 4rem;
            animation: float 4s ease-in-out infinite;
        }
        
        .featured-image-container::before {
            content: '⛵';
            position: absolute;
            top: -40px;
            right: 40px;
            font-size: 3rem;
            animation: wave 2.5s ease-in-out infinite;
            z-index: 10;
            filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.2));
        }
        
        .featured-image-container::after {
            content: '';
            position: absolute;
            bottom: -20px;
            left: 5%;
            right: 5%;
            height: 20px;
            background: linear-gradient(90deg, 
                transparent 0%, 
                rgba(156, 169, 134, 0.3) 20%, 
                rgba(156, 169, 134, 0.6) 50%, 
                rgba(156, 169, 134, 0.3) 80%, 
                transparent 100%);
            border-radius: 50%;
            animation: wave 3s ease-in-out infinite;
        }
        
        .featured-image {
            width: 100%;
            height: 500px;
            object-fit: cover;
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(45, 27, 15, 0.2);
        }
        
        /* Post Content */
        .post-content {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 1rem;
        }
        
        .post-content h2 {
            font-family: 'Playfair Display', serif;
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--primary-color);
            margin: 3rem 0 1.5rem;
            position: relative;
            padding-bottom: 1rem;
        }
        
        .post-content h2::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 80px;
            height: 3px;
            background: var(--accent-rust);
        }
        
        .post-content h3 {
            font-family: 'Playfair Display', serif;
            font-size: 1.8rem;
            font-weight: 600;
            color: var(--text-dark);
            margin: 2rem 0 1rem;
        }
        
        .post-content p {
            margin-bottom: 1.5rem;
            color: var(--text-dark);
        }
        
        .post-content ul, .post-content ol {
            margin-bottom: 1.5rem;
            padding-left: 2rem;
        }
        
        .post-content li {
            margin-bottom: 0.5rem;
        }
        
        /* Ingredients/Instructions Sections */
        .recipe-section {
            background: white;
            padding: 2.5rem;
            border-radius: 12px;
            margin: 3rem 0;
            box-shadow: 0 4px 20px rgba(45, 27, 15, 0.08);
            border-left: 4px solid var(--accent-rust);
        }
        
        .recipe-section h3 {
            font-family: 'Playfair Display', serif;
            font-size: 2rem;
            font-weight: 700;
            color: var(--primary-color);
            margin-top: 0;
            margin-bottom: 1.5rem;
        }
        
        .ingredients-list {
            list-style: none;
            padding: 0;
        }
        
        .ingredients-list li {
            padding: 0.75rem 0;
            border-bottom: 1px solid rgba(212, 165, 116, 0.2);
            display: flex;
            align-items: center;
        }
        
        .ingredients-list li:last-child {
            border-bottom: none;
        }
        
        .ingredients-list li::before {
            content: '⚓';
            color: var(--accent-warm);
            font-size: 1.2rem;
            margin-right: 1rem;
            flex-shrink: 0;
        }
        
        .instructions-list {
            counter-reset: step-counter;
            list-style: none;
            padding: 0;
        }
        
        .instructions-list li {
            counter-increment: step-counter;
            position: relative;
            padding-left: 4rem;
            margin-bottom: 2rem;
        }
        
        .instructions-list li::before {
            content: counter(step-counter);
            position: absolute;
            left: 0;
            top: 0;
            background: var(--accent-rust);
            color: white;
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Playfair Display', serif;
            font-weight: 700;
            font-size: 1.1rem;
        }
        
        /* Nutrition Info */
        .nutrition-info {
            background: linear-gradient(135deg, rgba(212, 165, 116, 0.1) 0%, rgba(156, 169, 134, 0.1) 100%);
            padding: 2rem;
            border-radius: 12px;
            margin: 3rem 0;
        }
        
        .nutrition-title {
            font-family: 'Playfair Display', serif;
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 1rem;
        }
        
        .nutrition-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 1rem;
        }
        
        .nutrition-item {
            background: white;
            padding: 1rem;
            border-radius: 8px;
            text-align: center;
            box-shadow: 0 2px 10px rgba(45, 27, 15, 0.05);
        }
        
        .nutrition-value {
            font-family: 'Playfair Display', serif;
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--accent-rust);
            display: block;
        }
        
        .nutrition-label {
            font-size: 0.9rem;
            color: var(--text-light);
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        /* Notes Section */
        .notes-section {
            background: #fff9f0;
            border-left: 4px solid var(--accent-warm);
            padding: 2rem;
            border-radius: 8px;
            margin: 3rem 0;
        }
        
        .notes-title {
            font-family: 'Playfair Display', serif;
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 1rem;
        }
        
        /* Related Recipes */
        .related-section {
            background: linear-gradient(135deg, rgba(212, 165, 116, 0.05) 0%, rgba(156, 169, 134, 0.05) 100%);
            padding: 4rem 0;
            margin-top: 4rem;
            border-top: 2px solid var(--accent-warm);
        }
        
        .section-title {
            font-family: 'Playfair Display', serif;
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--primary-color);
            text-align: center;
            margin-bottom: 3rem;
            position: relative;
        }
        
        .section-title::after {
            content: '';
            display: block;
            width: 80px;
            height: 3px;
            background: var(--accent-rust);
            margin: 1rem auto 0;
        }
        
        .related-card {
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(45, 27, 15, 0.1);
            transition: all 0.4s ease;
            height: 100%;
            border: 1px solid rgba(212, 165, 116, 0.2);
        }
        
        .related-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 30px rgba(45, 27, 15, 0.2);
        }
        
        .related-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            transition: transform 0.4s ease;
        }
        
        .related-card:hover .related-image {
            transform: scale(1.05);
        }
        
        .related-content {
            padding: 1.5rem;
        }
        
        .related-title {
            font-family: 'Playfair Display', serif;
            font-size: 1.4rem;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 0.5rem;
            line-height: 1.3;
        }
        
        .related-category {
            font-size: 0.85rem;
            color: var(--accent-rust);
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 600;
        }
        
        /* Comments Section */
        .comments-section {
            max-width: 800px;
            margin: 4rem auto;
            padding: 0 1rem;
        }
        
        .comments-title {
            font-family: 'Playfair Display', serif;
            font-size: 2rem;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 2rem;
        }
        
        .comment {
            background: white;
            padding: 1.5rem;
            border-radius: 8px;
            margin-bottom: 1.5rem;
            box-shadow: 0 2px 10px rgba(45, 27, 15, 0.05);
        }
        
        .comment-author {
            font-family: 'Playfair Display', serif;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 0.5rem;
        }
        
        .comment-date {
            font-size: 0.9rem;
            color: var(--text-light);
            margin-bottom: 1rem;
        }
        
        /* Footer */
        .site-footer {
            background: var(--text-dark);
            color: var(--cream);
            padding: 3rem 0 1.5rem;
            margin-top: 4rem;
        }
        
        .footer-links {
            list-style: none;
            display: flex;
            gap: 2rem;
            justify-content: center;
            margin-bottom: 2rem;
        }
        
        .footer-links a {
            color: var(--cream);
            text-decoration: none;
            font-family: 'Playfair Display', serif;
            transition: color 0.3s ease;
        }
        
        .footer-links a:hover {
            color: var(--accent-warm);
        }
        
        .copyright {
            text-align: center;
            font-size: 0.9rem;
            color: var(--text-light);
            padding-top: 2rem;
            border-top: 1px solid rgba(212, 165, 116, 0.2);
        }
        
        /* Print Recipe Button */
        .action-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin: 3rem 0;
            flex-wrap: wrap;
        }
        
        .btn-action {
            background: var(--accent-rust);
            color: white;
            border: none;
            padding: 1rem 2.5rem;
            font-family: 'Playfair Display', serif;
            font-size: 1rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-radius: 6px;
            transition: all 0.3s ease;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
        }
        
        .btn-action:hover {
            background: var(--primary-color);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(184, 92, 56, 0.3);
            color: white;
        }
        
        .btn-secondary {
            background: var(--accent-warm);
        }
        
        .btn-secondary:hover {
            background: var(--sage);
        }
        
        /* Responsive */
        @media (max-width: 768px) {
            .post-title {
                font-size: 2.5rem;
            }
            
            .featured-image {
                height: 300px;
            }
            
            .post-content h2 {
                font-size: 2rem;
            }
            
            .nutrition-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="site-header">
        <div class="container text-center">
            <a href="index.html" class="site-title">Hungry Ship</a>
        </div>
    </header>

    <!-- Navigation -->
    <nav class="main-nav">
        <div class="container">
            <ul class="nav justify-content-center">
                <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#recipes">Recipes</a></li>
                <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- Post Header -->
    <article class="container">
        <div class="post-header">
            <span class="post-category" id="postCategory">Desserts</span>
            <h1 class="post-title" id="postTitle">Decadent Chocolate Cake</h1>
            <div class="post-meta">
                <span class="meta-item"><span class="meta-icon">👤</span> <span id="postAuthor">Chef Maria</span></span>
                <span class="meta-item"><span class="meta-icon">📅</span> <span id="postDate">February 3, 2026</span></span>
                <span class="meta-item"><span class="meta-icon">⏱</span> <span id="postTime">60 min</span></span>
                <span class="meta-item"><span class="meta-icon">👥</span> <span id="postServings">8 servings</span></span>
            </div>
        </div>

        <!-- Featured Image -->
        <div class="featured-image-container">
            <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&auto=format&fit=crop" alt="Decadent Chocolate Cake" class="featured-image" id="featuredImage">
        </div>

        <!-- Action Buttons -->
        <div class="action-buttons">
            <button class="btn-action" onclick="printRecipe()">🖨 Print Recipe</button>
            <button class="btn-action btn-secondary" onclick="saveRecipe()">❤️ Save Recipe</button>
            <button class="btn-action btn-secondary" onclick="shareRecipe()">📤 Share</button>
        </div>

        <!-- Post Introduction -->
        <div class="post-content">
            <p id="postIntro">
                There's something magical about a perfectly baked chocolate cake. This recipe combines rich cocoa with silky ganache to create layers of pure indulgence. Whether you're celebrating a special occasion or simply treating yourself, this cake promises to deliver deep chocolate flavor in every bite.
            </p>

            <!-- Ingredients -->
            <div class="recipe-section">
                <h3>⚓ Ingredients</h3>
                <ul class="ingredients-list" id="ingredientsList">
                    <li>2 cups all-purpose flour</li>
                    <li>2 cups granulated sugar</li>
                    <li>3/4 cup unsweetened cocoa powder</li>
                    <li>2 teaspoons baking soda</li>
                    <li>1 teaspoon baking powder</li>
                    <li>1 teaspoon salt</li>
                    <li>2 large eggs</li>
                    <li>1 cup buttermilk</li>
                    <li>1 cup strong brewed coffee (cooled)</li>
                    <li>1/2 cup vegetable oil</li>
                    <li>2 teaspoons vanilla extract</li>
                </ul>
                
                <h4 style="margin-top: 2rem;">For the Ganache:</h4>
                <ul class="ingredients-list">
                    <li>2 cups heavy cream</li>
                    <li>16 oz semi-sweet chocolate chips</li>
                    <li>2 tablespoons butter</li>
                </ul>
            </div>

            <!-- Instructions -->
            <div class="recipe-section">
                <h3>🧭 Instructions</h3>
                <ol class="instructions-list" id="instructionsList">
                    <li>Preheat your oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.</li>
                    <li>In a large bowl, whisk together flour, sugar, cocoa powder, baking soda, baking powder, and salt.</li>
                    <li>In a separate bowl, beat eggs, then add buttermilk, coffee, oil, and vanilla extract. Mix until well combined.</li>
                    <li>Gradually add the wet ingredients to the dry ingredients, mixing until just combined. The batter will be thin.</li>
                    <li>Divide the batter evenly between the prepared pans.</li>
                    <li>Bake for 30-35 minutes, or until a toothpick inserted in the center comes out clean.</li>
                    <li>Allow cakes to cool in pans for 10 minutes, then turn out onto wire racks to cool completely.</li>
                    <li>For the ganache, heat cream in a saucepan until it just begins to simmer. Remove from heat and add chocolate chips and butter. Stir until smooth and glossy.</li>
                    <li>Let ganache cool to spreading consistency (about 15-20 minutes).</li>
                    <li>Place one cake layer on a serving plate. Spread with ganache. Top with second layer and cover entire cake with remaining ganache.</li>
                    <li>Refrigerate for at least 30 minutes before serving to set the ganache.</li>
                </ol>
            </div>

            <!-- Nutrition Info -->
            <div class="nutrition-info">
                <h4 class="nutrition-title">Nutrition Information (per serving)</h4>
                <div class="nutrition-grid" id="nutritionInfo">
                    <div class="nutrition-item">
                        <span class="nutrition-value">520</span>
                        <span class="nutrition-label">Calories</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-value">28g</span>
                        <span class="nutrition-label">Fat</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-value">65g</span>
                        <span class="nutrition-label">Carbs</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-value">7g</span>
                        <span class="nutrition-label">Protein</span>
                    </div>
                </div>
            </div>

            <!-- Chef's Notes -->
            <div class="notes-section">
                <h4 class="notes-title">Chef's Notes</h4>
                <p id="chefNotes">
                    The secret to this ultra-moist cake is the coffee! Don't worry—it won't taste like coffee. The coffee enhances the chocolate flavor and adds moisture. For an extra special touch, you can add a tablespoon of espresso powder to the ganache. This cake can be made a day ahead and keeps well in the refrigerator for up to 5 days.
                </p>
            </div>
        </div>
    </article>

    <!-- Related Recipes -->
    <section class="related-section">
        <div class="container">
            <h2 class="section-title">More Recipes You'll Love</h2>
            <div class="row" id="relatedRecipes">
                <!-- Related recipe cards will be populated here -->
                <div class="col-md-4 mb-4">
                    <a href="#" class="text-decoration-none">
                        <div class="related-card">
                            <img src="https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=600&auto=format&fit=crop" alt="Tiramisu" class="related-image">
                            <div class="related-content">
                                <span class="related-category">Desserts</span>
                                <h3 class="related-title">Classic Tiramisu</h3>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-md-4 mb-4">
                    <a href="#" class="text-decoration-none">
                        <div class="related-card">
                            <img src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&auto=format&fit=crop" alt="Chocolate Chip Cookies" class="related-image">
                            <div class="related-content">
                                <span class="related-category">Desserts</span>
                                <h3 class="related-title">Perfect Chocolate Chip Cookies</h3>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-md-4 mb-4">
                    <a href="#" class="text-decoration-none">
                        <div class="related-card">
                            <img src="https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&auto=format&fit=crop" alt="Brownie" class="related-image">
                            <div class="related-content">
                                <span class="related-category">Desserts</span>
                                <h3 class="related-title">Fudgy Brownies</h3>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Comments Section -->
    <section class="comments-section">
        <h3 class="comments-title">Comments</h3>
        <div id="commentsContainer">
            <!-- Comments will be loaded here -->
            <div class="comment">
                <div class="comment-author">Sarah J.</div>
                <div class="comment-date">January 28, 2026</div>
                <p>This cake is absolutely divine! Made it for my daughter's birthday and everyone asked for the recipe. The ganache is so smooth and rich!</p>
            </div>
            <div class="comment">
                <div class="comment-author">Mike R.</div>
                <div class="comment-date">January 25, 2026</div>
                <p>Best chocolate cake I've ever made. The coffee really does make a difference. Will be making this again for sure!</p>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="site-footer">
        <div class="container">
            <ul class="footer-links">
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Use</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#advertise">Advertise</a></li>
            </ul>
            <p class="copyright">&copy; 2026 Hungry Ship. All rights reserved.</p>
        </div>
    </footer>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    
    <!-- Custom JavaScript for API Integration -->
    <script>
        
        // Load recipe data on page load
        document.addEventListener('DOMContentLoaded', () => {
            if (recipeId) {
                loadRecipe(recipeId);
            }
        });
        
        // Function to load recipe from API
        async function loadRecipe(id) {
            try {
                const response = await fetch(`${API_ENDPOINT}/${id}`);
                const recipe = await response.json();
                
                // Populate the page with recipe data
                populateRecipe(recipe);
                
                // Load related recipes
                loadRelatedRecipes(recipe.category);
                
            } catch (error) {
                console.error('Error loading recipe:', error);
            }
        }
        
        // Function to populate recipe data
        function populateRecipe(recipe) {
            // Update page title
            document.title = `${recipe.title} - Hungry Ship`;
            
            // Update header info
            document.getElementById('postCategory').textContent = recipe.category;
            document.getElementById('postTitle').textContent = recipe.title;
            document.getElementById('postAuthor').textContent = recipe.author;
            document.getElementById('postDate').textContent = recipe.date;
            document.getElementById('postTime').textContent = recipe.cookTime;
            document.getElementById('postServings').textContent = recipe.servings + ' servings';
            
            // Update featured image
            document.getElementById('featuredImage').src = recipe.image;
            document.getElementById('featuredImage').alt = recipe.title;
            
            // Update introduction
            document.getElementById('postIntro').textContent = recipe.introduction;
            
            // Update ingredients
            if (recipe.ingredients) {
                const ingredientsList = document.getElementById('ingredientsList');
                ingredientsList.innerHTML = '';
                recipe.ingredients.forEach(ingredient => {
                    const li = document.createElement('li');
                    li.textContent = ingredient;
                    ingredientsList.appendChild(li);
                });
            }
            
            // Update instructions
            if (recipe.instructions) {
                const instructionsList = document.getElementById('instructionsList');
                instructionsList.innerHTML = '';
                recipe.instructions.forEach(instruction => {
                    const li = document.createElement('li');
                    li.textContent = instruction;
                    instructionsList.appendChild(li);
                });
            }
            
            // Update nutrition info
            if (recipe.nutrition) {
                const nutritionInfo = document.getElementById('nutritionInfo');
                nutritionInfo.innerHTML = `
                    <div class="nutrition-item">
                        <span class="nutrition-value">${recipe.nutrition.calories}</span>
                        <span class="nutrition-label">Calories</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-value">${recipe.nutrition.fat}</span>
                        <span class="nutrition-label">Fat</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-value">${recipe.nutrition.carbs}</span>
                        <span class="nutrition-label">Carbs</span>
                    </div>
                    <div class="nutrition-item">
                        <span class="nutrition-value">${recipe.nutrition.protein}</span>
                        <span class="nutrition-label">Protein</span>
                    </div>
                `;
            }
            
            // Update chef's notes
            if (recipe.notes) {
                document.getElementById('chefNotes').textContent = recipe.notes;
            }
        }
        
        // Function to load related recipes
        async function loadRelatedRecipes(category) {
            try {
                const response = await fetch(`${API_ENDPOINT}?category=${category}&limit=3`);
                const recipes = await response.json();
                
                const container = document.getElementById('relatedRecipes');
                container.innerHTML = '';
                
                recipes.forEach(recipe => {
                    const card = `
                        <div class="col-md-4 mb-4">
                            <a href="recipe.html?id=${recipe.id}" class="text-decoration-none">
                                <div class="related-card">
                                    <img src="${recipe.image}" alt="${recipe.title}" class="related-image">
                                    <div class="related-content">
                                        <span class="related-category">${recipe.category}</span>
                                        <h3 class="related-title">${recipe.title}</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `;
                    container.innerHTML += card;
                });
            } catch (error) {
                console.error('Error loading related recipes:', error);
            }
        }
        
        // Print recipe function
        function printRecipe() {
            window.print();
        }
        
        // Save recipe function
        function saveRecipe() {
            // Implement save to favorites functionality
            console.log('Saving recipe...');
            alert('Recipe saved to your favorites!');
        }
        
        // Share recipe function
        function shareRecipe() {
            if (navigator.share) {
                navigator.share({
                    title: document.getElementById('postTitle').textContent,
                    text: 'Check out this recipe from Hungry Ship!',
                    url: window.location.href
                }).catch(err => console.log('Error sharing:', err));
            } else {
                // Fallback - copy link to clipboard
                navigator.clipboard.writeText(window.location.href);
                alert('Recipe link copied to clipboard!');
            }
        }
    </script>
</body>
</html>