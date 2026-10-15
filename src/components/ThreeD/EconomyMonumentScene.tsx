import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { Eye, Layers, Sun, RotateCw, ChevronDown, ChevronUp, Sparkles, Compass } from 'lucide-react';

// Pre-allocated scratch vectors to prevent GC allocations in 60fps render loop
const _vec3 = new THREE.Vector3();
const _targetCamPos = new THREE.Vector3();
const _targetLookAt = new THREE.Vector3();
const _currentLookAt = new THREE.Vector3();

type CameraPreset = 'monument' | 'agriculture' | 'industry' | 'services' | 'tamilnadu';
type LightingTheme = 'gold' | 'sapphire' | 'emerald';

interface Props {
  fullScreen?: boolean;
  onSelectFeature?: (feature: string) => void;
}

export const EconomyMonumentScene: React.FC<Props> = ({ fullScreen = false, onSelectFeature }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  
  // Interactive UI state
  const [isDockCollapsed, setIsDockCollapsed] = useState(false);
  const [explodedFactor, setExplodedFactor] = useState(0); // 0 (assembled) to 1 (exploded)
  const [activePreset, setActivePreset] = useState<CameraPreset>('monument');
  const [activeTheme, setActiveTheme] = useState<LightingTheme>('gold');
  const [isRotating, setIsRotating] = useState(true);

  // Mutable refs for render loop access without re-triggering useEffect
  const stateRef = useRef({
    explodedFactor: 0,
    targetExploded: 0,
    activePreset: 'monument' as CameraPreset,
    activeTheme: 'gold' as LightingTheme,
    isRotating: true,
    orbitAngle: 0,
  });

  // Sync state to mutable ref
  useEffect(() => {
    stateRef.current.targetExploded = explodedFactor;
  }, [explodedFactor]);

  useEffect(() => {
    stateRef.current.activePreset = activePreset;
  }, [activePreset]);

  useEffect(() => {
    stateRef.current.activeTheme = activeTheme;
  }, [activeTheme]);

  useEffect(() => {
    stateRef.current.isRotating = isRotating;
  }, [isRotating]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // --- 1. RENDERER SETUP ---
    const width = container.clientWidth || 800;
    const height = container.clientHeight || 500;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // --- 2. SCENE & ENVIRONMENT ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0b1324);
    scene.fog = new THREE.FogExp2(0x0b1324, 0.032);

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // --- 3. CAMERA SETUP ---
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 5, 12);
    _currentLookAt.set(0, 1.8, 0);
    camera.lookAt(_currentLookAt);

    // --- 4. STUDIO LIGHTING RIG ---
    const hemiLight = new THREE.HemisphereLight(0x7dd3fc, 0x0f172a, 1.2);
    scene.add(hemiLight);

    const keyLight = new THREE.DirectionalLight(0xfff5ea, 2.8);
    keyLight.position.set(8, 14, 8);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 35;
    keyLight.shadow.bias = -0.0005;
    keyLight.shadow.normalBias = 0.02;
    const d = 10;
    keyLight.shadow.camera.left = -d;
    keyLight.shadow.camera.right = d;
    keyLight.shadow.camera.top = d;
    keyLight.shadow.camera.bottom = -d;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x38bdf8, 1.2);
    fillLight.position.set(-8, 6, -6);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xf59e0b, 1.8);
    rimLight.position.set(0, 9, -10);
    scene.add(rimLight);

    // Ground contact plane
    const groundGeo = new THREE.PlaneGeometry(30, 30);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x091020,
      roughness: 0.85,
      metalness: 0.15,
    });
    const groundMesh = new THREE.Mesh(groundGeo, groundMat);
    groundMesh.rotation.x = -Math.PI / 2;
    groundMesh.position.y = -0.01;
    groundMesh.receiveShadow = true;
    scene.add(groundMesh);

    // Contact shadow simulation disc
    const shadowGeo = new THREE.CircleGeometry(4.8, 32);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x020617,
      transparent: true,
      opacity: 0.6,
      depthWrite: false,
    });
    const contactShadow = new THREE.Mesh(shadowGeo, shadowMat);
    contactShadow.rotation.x = -Math.PI / 2;
    contactShadow.position.y = 0.005;
    scene.add(contactShadow);

    // --- 5. COMPOSITE PROCEDURAL 3D MODELS ---
    // PBR Materials
    const goldMat = new THREE.MeshPhysicalMaterial({
      color: 0xf59e0b,
      metalness: 0.92,
      roughness: 0.16,
      clearcoat: 0.8,
      clearcoatRoughness: 0.2,
    });

    const marbleMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.35,
      metalness: 0.1,
    });

    const steelMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.85,
      roughness: 0.22,
    });

    const agriGreenMat = new THREE.MeshPhysicalMaterial({
      color: 0x10b981,
      metalness: 0.3,
      roughness: 0.25,
      clearcoat: 0.6,
    });

    const sapphireMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      metalness: 0.1,
      roughness: 0.08,
      transmission: 0.85,
      thickness: 1.2,
      ior: 1.55,
    });

    const tnEmeraldMat = new THREE.MeshPhysicalMaterial({
      color: 0x059669,
      metalness: 0.75,
      roughness: 0.2,
      clearcoat: 1.0,
    });

    // Root Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // --- MODEL A: CENTRAL ASHOKA & SOVEREIGN CAPITAL PILLAR (7-part composite) ---
    const pillarGroup = new THREE.Group();
    rootGroup.add(pillarGroup);

    // Part 1: Stepped Octagonal Plinth Base
    const baseGeo = new THREE.CylinderGeometry(1.9, 2.1, 0.45, 8);
    const baseMesh = new THREE.Mesh(baseGeo, marbleMat);
    baseMesh.position.y = 0.225;
    baseMesh.castShadow = true;
    baseMesh.receiveShadow = true;
    pillarGroup.add(baseMesh);

    // Part 2: Middle Pedestal Ring with Inscribed Bevel
    const pedestalGeo = new THREE.CylinderGeometry(1.5, 1.7, 0.3, 16);
    const pedestalMesh = new THREE.Mesh(pedestalGeo, goldMat);
    pedestalMesh.position.y = 0.6;
    pedestalMesh.castShadow = true;
    pillarGroup.add(pedestalMesh);

    // Part 3: Fluted Central Sovereign Shaft
    const shaftGeo = new THREE.CylinderGeometry(0.75, 0.9, 2.4, 24);
    const shaftMesh = new THREE.Mesh(shaftGeo, marbleMat);
    shaftMesh.position.y = 1.95;
    shaftMesh.castShadow = true;
    shaftMesh.receiveShadow = true;
    pillarGroup.add(shaftMesh);

    // Part 4: Capital Torus Collar Band
    const collarGeo = new THREE.TorusGeometry(0.85, 0.1, 16, 32);
    const collarMesh = new THREE.Mesh(collarGeo, goldMat);
    collarMesh.rotation.x = Math.PI / 2;
    collarMesh.position.y = 3.15;
    pillarGroup.add(collarMesh);

    // Part 5: Inverted Lotus Capital
    const lotusPoints: THREE.Vector2[] = [];
    for (let i = 0; i <= 10; i++) {
      const u = i / 10;
      const x = 0.75 + Math.sin(u * Math.PI) * 0.45;
      const y = u * 0.7;
      lotusPoints.push(new THREE.Vector2(x, y));
    }
    const lotusGeo = new THREE.LatheGeometry(lotusPoints, 24);
    const lotusMesh = new THREE.Mesh(lotusGeo, goldMat);
    lotusMesh.position.y = 3.25;
    lotusMesh.castShadow = true;
    pillarGroup.add(lotusMesh);

    // Part 6: Ashoka Chakra Abacus Ring
    const abacusGeo = new THREE.CylinderGeometry(1.25, 1.25, 0.35, 24);
    const abacusMesh = new THREE.Mesh(abacusGeo, marbleMat);
    abacusMesh.position.y = 4.12;
    abacusMesh.castShadow = true;
    pillarGroup.add(abacusMesh);

    // Part 7: Crown Sovereign Rupee Emblem Disc
    const emblemGeo = new THREE.CylinderGeometry(0.7, 0.7, 0.18, 32);
    const emblemMesh = new THREE.Mesh(emblemGeo, goldMat);
    emblemMesh.rotation.x = Math.PI / 2;
    emblemMesh.position.set(0, 4.85, 0);
    emblemMesh.castShadow = true;
    pillarGroup.add(emblemMesh);

    // Rupee symbol procedural ribbing
    const ribGeo = new THREE.BoxGeometry(0.65, 0.08, 0.22);
    const ribMesh1 = new THREE.Mesh(ribGeo, goldMat);
    ribMesh1.position.set(0, 4.95, 0);
    pillarGroup.add(ribMesh1);
    const ribMesh2 = new THREE.Mesh(ribGeo, goldMat);
    ribMesh2.position.set(0, 4.75, 0);
    pillarGroup.add(ribMesh2);

    // --- MODEL B: PRIMARY SECTOR (AGRICULTURE - 4-part composite) ---
    const agriGroup = new THREE.Group();
    rootGroup.add(agriGroup);
    agriGroup.position.set(-3.8, 1.5, 0);

    // Core Emerald Sphere
    const agriSphere = new THREE.Mesh(new THREE.SphereGeometry(0.85, 24, 24), agriGreenMat);
    agriSphere.castShadow = true;
    agriGroup.add(agriSphere);

    // Orbiting Terraced Crop Rings (Torus)
    const agriRing1 = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.05, 12, 32), goldMat);
    agriRing1.rotation.x = 0.8;
    agriGroup.add(agriRing1);

    const agriRing2 = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.04, 12, 32), agriGreenMat);
    agriRing2.rotation.y = 0.6;
    agriGroup.add(agriRing2);

    // Grain Stalks / Irrigation Bevel
    const stalkGeo = new THREE.CylinderGeometry(0.04, 0.06, 1.8, 8);
    for (let i = 0; i < 4; i++) {
      const stalk = new THREE.Mesh(stalkGeo, goldMat);
      stalk.position.set(Math.cos(i * 1.57) * 0.7, 0.3, Math.sin(i * 1.57) * 0.7);
      stalk.rotation.z = 0.2 * (i % 2 === 0 ? 1 : -1);
      agriGroup.add(stalk);
    }

    // --- MODEL C: SECONDARY SECTOR (INDUSTRY - 5-part composite) ---
    const industryGroup = new THREE.Group();
    rootGroup.add(industryGroup);
    industryGroup.position.set(2.4, 1.6, -3.2);

    // Core Brushed Steel Hub
    const indHub = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.85, 0.6, 20), steelMat);
    indHub.castShadow = true;
    industryGroup.add(indHub);

    // Industrial Gear Cogs (Procedural 8 teeth)
    const cogGeo = new THREE.BoxGeometry(0.25, 0.5, 0.2);
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const cog = new THREE.Mesh(cogGeo, steelMat);
      cog.position.set(Math.cos(angle) * 0.95, 0, Math.sin(angle) * 0.95);
      cog.rotation.y = -angle;
      industryGroup.add(cog);
    }

    // Twin Factory Spire Obelisks
    const spire1 = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.22, 1.7, 12), steelMat);
    spire1.position.set(0.28, 0.95, 0.2);
    industryGroup.add(spire1);

    const spire2 = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.18, 1.4, 12), goldMat);
    spire2.position.set(-0.25, 0.8, -0.2);
    industryGroup.add(spire2);

    // Automotive Valve Ring
    const valveRing = new THREE.Mesh(new THREE.TorusGeometry(1.3, 0.04, 8, 24), goldMat);
    valveRing.rotation.x = Math.PI / 3;
    industryGroup.add(valveRing);

    // --- MODEL D: TERTIARY SECTOR (SERVICES & IT - 4-part composite) ---
    const servicesGroup = new THREE.Group();
    rootGroup.add(servicesGroup);
    servicesGroup.position.set(2.2, 1.8, 3.2);

    // Sapphire Crystal Obelisk
    const crystalGeo = new THREE.OctahedronGeometry(0.9, 0);
    const crystalMesh = new THREE.Mesh(crystalGeo, sapphireMat);
    crystalMesh.scale.set(0.9, 1.6, 0.9);
    crystalMesh.castShadow = true;
    servicesGroup.add(crystalMesh);

    // Glowing Fiber Optic Data Rings
    const dataRing1 = new THREE.Mesh(new THREE.TorusGeometry(1.25, 0.04, 12, 32), sapphireMat);
    dataRing1.rotation.x = 0.5;
    servicesGroup.add(dataRing1);

    const dataRing2 = new THREE.Mesh(new THREE.TorusGeometry(1.45, 0.03, 12, 32), goldMat);
    dataRing2.rotation.y = 0.7;
    servicesGroup.add(dataRing2);

    // Core Data Beacon
    const beaconGeo = new THREE.IcosahedronGeometry(0.35, 1);
    const beaconMesh = new THREE.Mesh(beaconGeo, goldMat);
    beaconMesh.position.y = 1.6;
    servicesGroup.add(beaconMesh);

    // --- MODEL E: TAMIL NADU DEVELOPMENT BEACON (Gopuram Tier & Wind Turbine - 6 parts) ---
    const tnBeaconGroup = new THREE.Group();
    rootGroup.add(tnBeaconGroup);
    tnBeaconGroup.position.set(-2.0, 0, 3.6);

    // Tier 1: Dravidian Stepped Plinth
    const gopuramTier1 = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.35, 1.4), tnEmeraldMat);
    gopuramTier1.position.y = 0.175;
    gopuramTier1.castShadow = true;
    tnBeaconGroup.add(gopuramTier1);

    // Tier 2: Mid Gopuram Tier
    const gopuramTier2 = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.3, 1.0), marbleMat);
    gopuramTier2.position.y = 0.5;
    tnBeaconGroup.add(gopuramTier2);

    // Tier 3: Upper Kalasam Tier
    const gopuramTier3 = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.3, 0.75), goldMat);
    gopuramTier3.position.y = 0.8;
    tnBeaconGroup.add(gopuramTier3);

    // 5 Brass Kalasams at the Pinnacle
    for (let k = -2; k <= 2; k++) {
      const kalasam = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.08, 0.25, 8), goldMat);
      kalasam.position.set(k * 0.15, 1.05, 0);
      tnBeaconGroup.add(kalasam);
    }

    // Modern Renewable Wind Turbine Mast (Representing TN Wind Energy Leadership)
    const turbineMast = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.1, 2.6, 12), steelMat);
    turbineMast.position.set(1.2, 1.3, -0.4);
    turbineMast.castShadow = true;
    tnBeaconGroup.add(turbineMast);

    // Turbine Nacelle & Rotor Group
    const rotorGroup = new THREE.Group();
    rotorGroup.position.set(1.2, 2.6, -0.4);
    tnBeaconGroup.add(rotorGroup);

    const nacelle = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.16, 0.35), steelMat);
    rotorGroup.add(nacelle);

    // 3 Aerodynamic Turbine Blades
    const bladeGeo = new THREE.BoxGeometry(0.06, 0.9, 0.02);
    for (let b = 0; b < 3; b++) {
      const blade = new THREE.Mesh(bladeGeo, goldMat);
      blade.position.y = 0.45;
      const bladePivot = new THREE.Group();
      bladePivot.rotation.z = (b * Math.PI * 2) / 3;
      bladePivot.position.z = 0.18;
      bladePivot.add(blade);
      rotorGroup.add(bladePivot);
    }

    // --- MODEL F: FINANCIAL & FISCAL LIQUIDITY CONDUITS (Curved Tubes) ---
    // Connects Central RBI Apex to the 3 Sectors
    const conduitsGroup = new THREE.Group();
    rootGroup.add(conduitsGroup);

    const createConduit = (p1: THREE.Vector3, p2: THREE.Vector3, color: number) => {
      const mid = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
      mid.y += 1.4; // Arc upwards
      const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
      const tubeGeo = new THREE.TubeGeometry(curve, 24, 0.035, 8, false);
      const tubeMat = new THREE.MeshPhysicalMaterial({
        color,
        emissive: color,
        emissiveIntensity: 0.35,
        transparent: true,
        opacity: 0.8,
        roughness: 0.2,
      });
      return new THREE.Mesh(tubeGeo, tubeMat);
    };

    const apexPoint = new THREE.Vector3(0, 4.2, 0);
    const agriPoint = new THREE.Vector3(-3.8, 1.5, 0);
    const indPoint = new THREE.Vector3(2.4, 1.6, -3.2);
    const servPoint = new THREE.Vector3(2.2, 1.8, 3.2);

    conduitsGroup.add(createConduit(apexPoint, agriPoint, 0x10b981));
    conduitsGroup.add(createConduit(apexPoint, indPoint, 0x94a3b8));
    conduitsGroup.add(createConduit(apexPoint, servPoint, 0x38bdf8));

    // Liquidity Pulse Particle Pack
    const particleCount = 45;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 6;
      particlePositions[i * 3 + 1] = Math.random() * 4 + 0.5;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xf59e0b,
      size: 0.08,
      transparent: true,
      opacity: 0.75,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Pre-warm shaders
    renderer.compile(scene, camera);

    // --- 6. ANIMATION & EXPONENTIAL DAMPING LOOP ---
    let animationFrameId: number;
    let lastTime = performance.now();

    const render = (time: number) => {
      animationFrameId = requestAnimationFrame(render);
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      const current = stateRef.current;

      // 1. Smoothly interpolate Exploded View separation using exponential damping
      const dampingSpeed = 4.5;
      current.explodedFactor += (current.targetExploded - current.explodedFactor) * (1 - Math.exp(-dampingSpeed * dt));

      // Separate model components along their expansion vectors
      pillarGroup.position.y = current.explodedFactor * 1.5;
      emblemMesh.position.y = 4.85 + current.explodedFactor * 1.2;
      agriGroup.position.x = -3.8 - current.explodedFactor * 2.2;
      industryGroup.position.x = 2.4 + current.explodedFactor * 1.8;
      industryGroup.position.z = -3.2 - current.explodedFactor * 1.8;
      servicesGroup.position.x = 2.2 + current.explodedFactor * 1.8;
      servicesGroup.position.z = 3.2 + current.explodedFactor * 1.8;
      tnBeaconGroup.position.z = 3.6 + current.explodedFactor * 1.6;
      conduitsGroup.scale.setScalar(1 + current.explodedFactor * 0.4);

      // 2. Slow ambient rotation when enabled
      if (current.isRotating) {
        current.orbitAngle += dt * 0.28;
      }

      // Rotate sub-mechanisms
      rotorGroup.rotation.z += dt * 3.5; // Wind turbine spinning
      indHub.rotation.y += dt * 0.6; // Industrial gears rotating
      crystalMesh.rotation.y += dt * 0.8; // IT services crystal rotating
      agriRing1.rotation.z += dt * 0.5; // Agriculture ring rotating

      // 3. Update lighting theme colors smoothly
      if (current.activeTheme === 'gold') {
        keyLight.color.setHex(0xfff5ea);
        rimLight.color.setHex(0xf59e0b);
      } else if (current.activeTheme === 'sapphire') {
        keyLight.color.setHex(0xe0f2fe);
        rimLight.color.setHex(0x38bdf8);
      } else if (current.activeTheme === 'emerald') {
        keyLight.color.setHex(0xecfdf5);
        rimLight.color.setHex(0x10b981);
      }

      // 4. Camera target position and look-at based on active Preset
      if (current.activePreset === 'monument') {
        const radius = 10.5;
        const camX = Math.sin(current.orbitAngle) * radius;
        const camZ = Math.cos(current.orbitAngle) * radius;
        _targetCamPos.set(camX, 4.6, camZ);
        _targetLookAt.set(0, 2.2, 0);
      } else if (current.activePreset === 'agriculture') {
        _targetCamPos.set(agriGroup.position.x - 3.2, 3.2, agriGroup.position.z + 3.2);
        _targetLookAt.copy(agriGroup.position);
      } else if (current.activePreset === 'industry') {
        _targetCamPos.set(industryGroup.position.x + 3.2, 3.5, industryGroup.position.z + 2.8);
        _targetLookAt.copy(industryGroup.position);
      } else if (current.activePreset === 'services') {
        _targetCamPos.set(servicesGroup.position.x + 3.0, 3.5, servicesGroup.position.z + 3.0);
        _targetLookAt.copy(servicesGroup.position);
      } else if (current.activePreset === 'tamilnadu') {
        _targetCamPos.set(tnBeaconGroup.position.x - 2.8, 3.0, tnBeaconGroup.position.z + 3.2);
        _targetLookAt.set(tnBeaconGroup.position.x, 1.4, tnBeaconGroup.position.z);
      }

      // Smooth exponential camera gliding
      const camDamp = 3.2;
      camera.position.x += (_targetCamPos.x - camera.position.x) * (1 - Math.exp(-camDamp * dt));
      camera.position.y += (_targetCamPos.y - camera.position.y) * (1 - Math.exp(-camDamp * dt));
      camera.position.z += (_targetCamPos.z - camera.position.z) * (1 - Math.exp(-camDamp * dt));

      _currentLookAt.x += (_targetLookAt.x - _currentLookAt.x) * (1 - Math.exp(-camDamp * dt));
      _currentLookAt.y += (_targetLookAt.y - _currentLookAt.y) * (1 - Math.exp(-camDamp * dt));
      _currentLookAt.z += (_targetLookAt.z - _currentLookAt.z) * (1 - Math.exp(-camDamp * dt));
      camera.lookAt(_currentLookAt);

      // Render frame
      renderer.render(scene, camera);
    };

    animationFrameId = requestAnimationFrame(render);

    // Handle responsive resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      baseGeo.dispose();
      pedestalGeo.dispose();
      shaftGeo.dispose();
      collarGeo.dispose();
      lotusGeo.dispose();
      abacusGeo.dispose();
      emblemGeo.dispose();
      groundGeo.dispose();
      shadowGeo.dispose();
      goldMat.dispose();
      marbleMat.dispose();
      steelMat.dispose();
      agriGreenMat.dispose();
      sapphireMat.dispose();
      tnEmeraldMat.dispose();
    };
  }, []);

  return (
    <div className={`relative w-full overflow-hidden rounded-2xl border border-slate-800 bg-[#0b1324] ${fullScreen ? 'h-[750px]' : 'h-[500px]'}`}>
      {/* 3D WebGL Canvas Isolated Mount Container */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full" />

      {/* Top Left Minimal Spec Badge (Unobtrusive) */}
      <div className="absolute top-4 left-4 z-10 pointer-events-auto flex items-center gap-2 bg-slate-900/80 border border-slate-700/60 rounded-lg px-3 py-1.5 text-xs text-slate-300">
        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        <span className="font-semibold text-slate-100">National Wealth & TN Development Monument</span>
        <span className="text-slate-500">·</span>
        <span className="text-slate-400">Interactive 3D Museum</span>
      </div>

      {/* Collapsible Unified Bottom Control Dock (<= 15% Viewport Footprint, Zero Central Occlusion, No Pulsing Dots) */}
      <div 
        className={`absolute bottom-3 left-1/2 -translate-x-1/2 z-20 w-[94%] max-w-[860px] transition-transform duration-300 pointer-events-auto ${
          isDockCollapsed ? 'translate-y-[calc(100%-36px)]' : 'translate-y-0'
        }`}
      >
        {/* Collapse Toggle Tab */}
        <div className="flex justify-center mb-1">
          <button
            onClick={() => setIsDockCollapsed(!isDockCollapsed)}
            className="flex items-center gap-1.5 px-3 py-1 text-[11px] font-medium text-slate-300 bg-slate-900/95 border border-slate-700/80 rounded-t-md hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label={isDockCollapsed ? 'Expand 3D Controls' : 'Collapse 3D Controls'}
          >
            {isDockCollapsed ? (
              <>
                <ChevronUp className="w-3.5 h-3.5" />
                <span>Show Controls (HUD)</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-3.5 h-3.5" />
                <span>Hide Controls (Cinema View)</span>
              </>
            )}
          </button>
        </div>

        {/* Dock Controls Body (Solid / RGBA surface, no backdrop-filter over WebGL) */}
        <div className="bg-slate-900/95 border border-slate-800 rounded-xl p-3 shadow-2xl flex flex-wrap items-center justify-between gap-4 text-xs">
          
          {/* Exploded View Slider */}
          <div className="flex items-center gap-2.5 min-w-[200px]">
            <div className="flex items-center gap-1 text-slate-300 shrink-0">
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-medium">Explode Blueprint</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={explodedFactor}
              onChange={(e) => setExplodedFactor(parseFloat(e.target.value))}
              className="w-24 accent-amber-500 cursor-pointer"
              aria-label="Exploded View Separation"
            />
            <span className="font-mono text-[11px] text-amber-400 w-8 tabular-nums">
              {Math.round(explodedFactor * 100)}%
            </span>
          </div>

          {/* Camera View Presets */}
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-1 text-slate-400 mr-1 hidden sm:flex">
              <Compass className="w-3.5 h-3.5" />
              <span>Focus:</span>
            </div>
            {(['monument', 'agriculture', 'industry', 'services', 'tamilnadu'] as CameraPreset[]).map((preset) => (
              <button
                key={preset}
                onClick={() => {
                  setActivePreset(preset);
                  if (onSelectFeature) onSelectFeature(preset);
                }}
                className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                  activePreset === preset
                    ? 'bg-amber-500 text-slate-950 font-semibold'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {preset === 'monument' && 'Overview'}
                {preset === 'agriculture' && 'Agri'}
                {preset === 'industry' && 'Industry'}
                {preset === 'services' && 'Services'}
                {preset === 'tamilnadu' && 'TN Beacon'}
              </button>
            ))}
          </div>

          {/* Lighting Ambience & Rotation Toggle */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-slate-800/80 p-0.5 rounded">
              <button
                onClick={() => setActiveTheme('gold')}
                title="Sovereign Gold Lighting"
                className={`w-5 h-5 rounded-sm transition-transform ${activeTheme === 'gold' ? 'bg-amber-400 scale-110 shadow-sm' : 'bg-amber-700/60 hover:bg-amber-600'}`}
              />
              <button
                onClick={() => setActiveTheme('sapphire')}
                title="Reserve Sapphire Lighting"
                className={`w-5 h-5 rounded-sm transition-transform ${activeTheme === 'sapphire' ? 'bg-sky-400 scale-110 shadow-sm' : 'bg-sky-800/60 hover:bg-sky-600'}`}
              />
              <button
                onClick={() => setActiveTheme('emerald')}
                title="Emerald Growth Lighting"
                className={`w-5 h-5 rounded-sm transition-transform ${activeTheme === 'emerald' ? 'bg-emerald-400 scale-110 shadow-sm' : 'bg-emerald-800/60 hover:bg-emerald-600'}`}
              />
            </div>

            <button
              onClick={() => setIsRotating(!isRotating)}
              className={`flex items-center gap-1 px-2.5 py-1 rounded text-[11px] transition-colors cursor-pointer ${
                isRotating ? 'bg-emerald-950 text-emerald-300 border border-emerald-700/50' : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <RotateCw className={`w-3 h-3 ${isRotating ? '' : 'opacity-40'}`} />
              <span>{isRotating ? 'Orbiting' : 'Paused'}</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
